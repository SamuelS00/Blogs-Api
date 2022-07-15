const Joi = require('joi');
const BadRequest = require('../errors/badRequest');
const { replyMessages } = require('./index');

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

const validateLogin = (email, password) => {
  const { error } = loginSchema.validate({ email, password });

  if (error) throw BadRequest(replyMessages.FIELDS_ARE_MISSING);
};

const validateNewUser = (user) => {
  const { error } = newUserSchema.validate(user);

  if (error) throw BadRequest(error.message);
};

module.exports = { validateLogin, validateNewUser };