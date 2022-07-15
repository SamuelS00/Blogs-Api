const { User } = require('../database/models/index');
const { createToken } = require('../helpers/jwt.service');
const BadRequest = require('../errors/badRequest');
const { validateLogin } = require('../helpers/validateBody');

const login = async (email, password) => {
  validateLogin(email, password);

  const user = await User.findOne(
    { 
      where: { email, password },
      attributes: { exclude: ['password'] },
    },
  );

  if (!user) throw BadRequest('Invalid fields');

  return createToken(user);
};

module.exports = { login };