const Joi = require('joi');

const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});  

const newUserSchema = Joi.object({
    displayName: Joi.string().min(8).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    image: Joi.string(),
});

const newCategorieSchema = Joi.object({
    name: Joi.string().required(),
});

module.exports = { loginSchema, newUserSchema, newCategorieSchema };