import { fetch, fetchAll } from "../lib/postgres.js";
import productValidate from "../Joi/products.js";

let INSERT_PRODUCT = ` 
	INSERT INTO products(product_name) VALUES($1)
	RETURNING *
`;
let UPDATE_PRODUCT = ` 
	UPDATE products SET product_name=$1 WHERE product_id=$2
	RETURNING *
`;
let DELETE_PRODUCT = ` 
	DELETE FROM products WHERE product_id=$1
	RETURNING *
`;
let SELECT_PRODUCT = ` 
	select 
	p.product_name,
	array_agg (t.tag_name) as tags
from products p 
left join categories_products cp on cp.product_id  = p.product_id
left join product_tags pt on pt.product_id = p.product_id 
left join tags t on t.tag_id = pt.tag_id 
where 
	case 
		when $1>0 then cp.categorie_id = $1
		else true
	end 
group  by p.product_name  
`;

const postProduct = async (body) => {
	try {
		let { error } = productValidate.productNameSchema.validate(body);
		if (error) throw error;
		return fetch(INSERT_PRODUCT, body.product_name);
	} catch (e) {
		throw e;
	}
};
const putProduct = async (body) => {
	try {
		let { error } = productValidate.productIdNameSchema.validate(body);
		if (error) throw error;
		return fetch(UPDATE_PRODUCT, body.product_name, body.product_id);
	} catch (e) {
		throw e;
	}
};
const deleteProduct = async (body) => {
	try {
		let { error } = productValidate.productIdSchema.validate(body);
		if (error) throw error;
		return fetch(DELETE_PRODUCT, body.product_id);
	} catch (e) {
		throw e;
	}
};

const getProducts = async ({ categorie_id }) => {
	try {
		categorie_id = Number(categorie_id) ? categorie_id : 0;
		return fetchAll(SELECT_PRODUCT, categorie_id);
	} catch (e) {
		throw e;
	}
};

export default {
	postProduct,
	deleteProduct,
	putProduct,
	getProducts,
};
