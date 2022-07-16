const { User } = require('../database/models/index');
const { createToken } = require('./JWT.service');
const BadRequest = require('../errors/badRequest');
const { validateBody } = require('../helpers/validateBody');
const replyMessages = require('../helpers/replyMessages');
const { loginSchema } = require('../utils/joi.schemas');

const login = async (email, password) => {
  validateBody(
    loginSchema, 
    { email, password }, 
    replyMessages.FIELDS_ARE_MISSING,
  );

  const user = await User.findOne(
    { 
      where: { email, password },
      attributes: { exclude: ['password'] },
    },
  );

  if (!user) throw BadRequest(replyMessages.INVALID_FIELDS);

  return createToken(user);
};

module.exports = { login };