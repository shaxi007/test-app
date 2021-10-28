import { fetch, fetchAll } from "../lib/postgres.js";
import categorieValidate from "../Joi/categorieRef.js";

let INSERT_CATEGORIE = ` 
	INSERT INTO categorie_categories(ct_id,categorie_id) VALUES($1,$2)
	RETURNING *
`;

let UPDATE_CATEGORIE = ` 
	UPDATE categorie_categories SET ct_id=$2,categorie_id=$3 WHERE id=$1
	RETURNING *
`;

let DELETE_CATEGORIE = ` 
	DELETE FROM categorie_categories WHERE id=$1
	RETURNING *
`;

const addCategrie = async (body) => {
	try {
		let { error } = categorieValidate.categorieRefSchema.validate(body);
		if (error) throw error;
		return fetch(
			INSERT_CATEGORIE,
			body.pr_categorie_id,
			body.ch_categorie_id
		);
	} catch (e) {
		throw e;
	}
};
const putCategrie = async (body) => {
	try {
		let { error } = categorieValidate.categorieRefIdSchema.validate(body);
		if (error) throw error;
		return fetch(
			UPDATE_CATEGORIE,
			body.id,
			body.pr_categorie_id,
			body.ch_categorie_id
		);
	} catch (e) {
		throw e;
	}
};

const deleteCategrie = async (body) => {
	try {
		let { error } = categorieValidate.categorieIdSchema.validate(body);
		if (error) throw error;
		return fetch(DELETE_CATEGORIE, body.id);
	} catch (e) {
		throw e;
	}
};

export default {
	addCategrie,
	putCategrie,
	deleteCategrie,
};
