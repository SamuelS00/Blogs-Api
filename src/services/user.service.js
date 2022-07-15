const { User } = require('../database/models/index');
const { createToken } = require('../helpers/jwt.service');
const { validateNewUser } = require('../helpers/validateBody');
const Conflict = require('../errors/conflict');

const create = async (newUser) => {
  validateNewUser(newUser);
  const { email, displayName, image } = newUser;
  const user = await User.findOne({ where: { email } });

  if (user) throw Conflict('User already registered');
  await User.create(newUser);  

  return createToken(displayName, email, image);
};

module.exports = { create };