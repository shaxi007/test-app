import Joi from "joi";
const tagNameSchema = Joi.object({
	tag_name: Joi.string().min(3).max(255).required(),
});

const tagIdSchema = Joi.object({
	tag_id: Joi.number().integer().min(0).max(100000).required(),
});

const tagIdNameSchema = Joi.object({
	tag_name: Joi.string().min(3).max(255).required(),
	tag_id: Joi.number().integer().min(0).max(100000).required(),
});

export default {
	tagNameSchema,
	tagIdSchema,
	tagIdNameSchema,
};
