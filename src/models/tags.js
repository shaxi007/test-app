import { fetch, fetchAll } from "../lib/postgres.js";
import tagValidate from "../Joi/tags.js";

let INSERT_TAG = ` 
	INSERT INTO tags(tag_name) VALUES($1)
	RETURNING *
`;
let UPDATE_TAG = ` 
	UPDATE tags SET tag_name=$1 WHERE tag_id=$2
	RETURNING *
`;
let DELETE_TAG = ` 
	DELETE FROM tags WHERE tag_id=$1
	RETURNING *
`;
let SELECT_TAG = ` 
	select t.tag_name,array_agg(p.product_name) as products from tags t
join product_tags pt on pt.tag_id = t.tag_id 
join products p on p.product_id = pt.product_id 
where 
	case
		when $1>0 then t.tag_id = $1
		else true
	end 
group by t.tag_name 
`;

const addTag = async (body) => {
	try {
		let { error } = tagValidate.tagNameSchema.validate(body);
		if (error) throw error;
		return fetch(INSERT_TAG, body.tag_name);
	} catch (e) {
		throw e;
	}
};
const updateTag = async (body) => {
	try {
		let { error } = tagValidate.tagIdNameSchema.validate(body);
		if (error) throw error;
		return fetch(UPDATE_TAG, body.tag_name, body.tag_id);
	} catch (e) {
		throw e;
	}
};
const deleteTag = async (body) => {
	try {
		let { error } = tagValidate.tagIdSchema.validate(body);
		if (error) throw error;
		return fetch(DELETE_TAG, body.tag_id);
	} catch (e) {
		throw e;
	}
};

const getTags = async ({ tag_id }) => {
	try {
		tag_id = tag_id ? tag_id : 0;
		return fetchAll(SELECT_TAG, tag_id);
	} catch (e) {
		throw e;
	}
};

export default {
	addTag,
	deleteTag,
	updateTag,
	getTags,
};
