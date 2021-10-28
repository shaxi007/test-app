import { fetch, fetchAll } from "../lib/postgres.js";
import tagValidate from "../Joi/tagRef.js";

let INSERT_TAG = ` 
	INSERT INTO product_tags(product_id,tag_id) VALUES($1,$2)
	RETURNING *
`;

let UPDATE_TAG = ` 
	UPDATE product_tags SET product_id=$2,tag_id=$3 WHERE id=$1
	RETURNING *
`;

let DELETE_TAG = ` 
	DELETE FROM product_tags WHERE id=$1
	RETURNING *
`;

const addTag = async (body) => {
	try {
		let { error } = tagValidate.tagRefSchema.validate(body);
		if (error) throw error;
		return fetch(INSERT_TAG, body.product_id, body.tag_id);
	} catch (e) {
		throw e;
	}
};
const putTag = async (body) => {
	try {
		let { error } = tagValidate.tagRefIdSchema.validate(body);
		if (error) throw error;
		return fetch(UPDATE_TAG, body.id, body.tag_id, body.product_id);
	} catch (e) {
		throw e;
	}
};

const deleteTag = async (body) => {
	try {
		let { error } = tagValidate.tagIdSchema.validate(body);
		if (error) throw error;
		return fetch(DELETE_TAG, body.id);
	} catch (e) {
		throw e;
	}
};

export default {
	addTag,
	putTag,
	deleteTag,
};
