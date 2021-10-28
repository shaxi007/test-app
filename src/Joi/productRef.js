import Joi from "joi";
const productRefSchema = Joi.object({
	categorie_id: Joi.number().integer().min(0).max(100000).required(),
	product_id: Joi.number().integer().min(0).max(100000).required(),
});

const productIdSchema = Joi.object({
	id: Joi.number().integer().min(0).max(100000).required(),
});

const productRefIdSchema = Joi.object({
	categorie_id: Joi.number().integer().min(0).max(100000),
	product_id: Joi.number().integer().min(0).max(100000),
	id: Joi.number().integer().min(0).max(100000).required(),
});

export default {
	productRefSchema,
	productIdSchema,
	productRefIdSchema,
};
