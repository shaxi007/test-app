import { fetch, fetchAll } from "../lib/postgres.js";
import productValidate from "../Joi/productRef.js";

let INSERT_PRODUCT = ` 
	INSERT INTO categories_products(categorie_id,product_id) VALUES($1,$2)
	RETURNING *
`;

let UPDATE_PRODUCT = ` 
	UPDATE categories_products categorie_id=$2,product_id=$3 WHERE id=$1
	RETURNING *
`;

let DELETE_PRODUCT = ` 
	DELETE FROM categories_products WHERE id=$1
	RETURNING *
`;

const addProduct = async (body) => {
	try {
		let { error } = productValidate.productRefSchema.validate(body);
		if (error) throw error;
		return fetch(INSERT_PRODUCT, body.categorie_id, body.product_id);
	} catch (e) {
		throw e;
	}
};
const putProduct = async (body) => {
	try {
		let { error } = productValidate.productRefIdSchema.validate(body);
		if (error) throw error;
		return fetch(
			UPDATE_PRODUCT,
			body.id,
			body.categorie_id,
			body.product_id
		);
	} catch (e) {
		throw e;
	}
};

const deleteProduct = async (body) => {
	try {
		let { error } = productValidate.productIdSchema.validate(body);
		if (error) throw error;
		return fetch(DELETE_PRODUCT, body.id);
	} catch (e) {
		throw e;
	}
};

export default {
	addProduct,
	putProduct,
	deleteProduct,
};
