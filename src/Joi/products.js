import Joi from "joi";
const productNameSchema = Joi.object({
	product_name: Joi.string().min(3).max(255).required(),
});

const productIdSchema = Joi.object({
	product_id: Joi.number().integer().min(0).max(100000).required(),
});

const productIdNameSchema = Joi.object({
	product_name: Joi.string().min(3).max(255).required(),
	product_id: Joi.number().integer().min(0).max(100000).required(),
});

export default {
	productNameSchema,
	productNameSchema,
	productIdNameSchema,
};
