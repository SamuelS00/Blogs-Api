const Joi = require('joi');
const BadRequest = require('../errors/badRequest');

const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});  

const validateLogin = (email, password) => {
  const { error } = loginSchema.validate({ email, password });

  if (error) throw BadRequest('Some required fields are missing');
};

module.exports = { validateLogin };