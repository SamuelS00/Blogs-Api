const { User } = require('../database/models/index');

const { createToken } = require('./jwt.service');
const { BadRequest } = require('../errors/index');
const { validateBody } = require('../helpers/validateBody');
const { FIELDS_ARE_MISSING, INVALID_FIELDS } = require('../helpers/replyMessages');
const { loginSchema } = require('../utils/joi.schemas');

const login = async (email, password) => {
  validateBody(loginSchema, { email, password }, FIELDS_ARE_MISSING);

  const user = await User.findOne(
    { 
      where: { email, password },
      attributes: { exclude: ['password'] },
    },
  );

  if (!user) throw BadRequest(INVALID_FIELDS);

  return createToken(user);
};

module.exports = { login };