import Joi from "joi";
const tagRefSchema = Joi.object({
	tag_id: Joi.number().integer().min(0).max(100000).required(),
	product_id: Joi.number().integer().min(0).max(100000).required(),
});

const tagIdSchema = Joi.object({
	id: Joi.number().integer().min(0).max(100000).required(),
});

const tagRefIdSchema = Joi.object({
	tag_id: Joi.number().integer().min(0).max(100000),
	product_id: Joi.number().integer().min(0).max(100000),
	id: Joi.number().integer().min(0).max(100000).required(),
});

export default {
	tagRefSchema,
	tagIdSchema,
	tagRefIdSchema,
};
