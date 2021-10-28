import Joi from "joi";
const categorieRefSchema = Joi.object({
	pr_categorie_id: Joi.number().integer().min(0).max(100000).required(),
	ch_categorie_id: Joi.number().integer().min(0).max(100000).required(),
});

const categorieIdSchema = Joi.object({
	id: Joi.number().integer().min(0).max(100000).required(),
});

const categorieRefIdSchema = Joi.object({
	pr_categorie_id: Joi.number().integer().min(0).max(100000),
	ch_categorie_id: Joi.number().integer().min(0).max(100000),
	id: Joi.number().integer().min(0).max(100000).required(),
});

export default {
	categorieRefSchema,
	categorieIdSchema,
	categorieRefIdSchema,
};
