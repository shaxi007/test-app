import Joi from "joi";
const categorieNameSchema = Joi.object({
	categorie_name: Joi.string().min(3).max(255).required(),
});

const categorieIdSchema = Joi.object({
	categorie_id: Joi.number().integer().min(0).max(100000).required(),
});

const categorieIdNameSchema = Joi.object({
	categorie_name: Joi.string().min(3).max(255).required(),
	categorie_id: Joi.number().integer().min(0).max(100000).required(),
});

export default {
	categorieNameSchema,
	categorieIdSchema,
	categorieIdNameSchema,
};
