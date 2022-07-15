const { User } = require('../database/models/index');
const { createToken } = require('./JWT.service');
const BadRequest = require('../errors/badRequest');
const { validateLogin } = require('../helpers/validateBody');
const replyMessages = require('../helpers/replyMessages');

const login = async (email, password) => {
  validateLogin(email, password);

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