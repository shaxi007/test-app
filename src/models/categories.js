import { fetch, fetchAll } from "../lib/postgres.js";
import categorieValidate from "../Joi/categories.js";

let INSERT_CATEGORIE = ` 
	INSERT INTO categories(categorie_name) VALUES($1)
	RETURNING *
`;

let UPDATE_CATEGORIE = ` 
	UPDATE categories SET categorie_name=$1 WHERE categorie_id=$2
	RETURNING *
`;

let DELETE_CATEGORIE = ` 
	DELETE FROM categories WHERE categorie_id=$1
	RETURNING *
`;

let SELECT_CATEGORIE = ` 
	select c.categorie_name , array_agg(c2.categorie_name) categorie_ref
from categories c 
left join categorie_categories cc on cc.ct_id = c.categorie_id 
left join categories c2 on c2.categorie_id = cc.categorie_id 
where 
	case
		when $1>0 then c.categorie_id = $1
		else true 
	end 
group by c.categorie_name 
`;

const addCategrie = async (body) => {
	try {
		let { error } = categorieValidate.categorieNameSchema.validate(body);
		if (error) throw error;
		return fetch(INSERT_CATEGORIE, body.categorie_name);
	} catch (e) {
		throw e;
	}
};
const putCategrie = async (body) => {
	try {
		let { error } = categorieValidate.categorieIdNameSchema.validate(body);
		if (error) throw error;
		return fetch(UPDATE_CATEGORIE, body.categorie_name, body.categorie_id);
	} catch (e) {
		throw e;
	}
};

const deleteCategrie = async (body) => {
	try {
		let { error } = categorieValidate.categorieIdSchema.validate(body);
		if (error) throw error;
		return fetch(DELETE_CATEGORIE, body.categorie_id);
	} catch (e) {
		throw e;
	}
};

const getCategorie = async ({ id }) => {
	try {
		id = Number(id) ? id : 0;
		return fetchAll(SELECT_CATEGORIE, id);
	} catch (e) {
		throw e;
	}
};

export default {
	addCategrie,
	putCategrie,
	deleteCategrie,
	getCategorie,
};
