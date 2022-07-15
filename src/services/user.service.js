const { User } = require('../database/models/index');
const { createToken } = require('./JWT.service');
const { validateNewUser } = require('../helpers/validateBody');
const Conflict = require('../errors/conflict');
const { replyMessages } = require('../helpers');

const getAll = async () => {
  const users = await User.findAll(
    { attributes: { exclude: ['password'] } },
  );

  return users;
};

const create = async (newUser) => {
  validateNewUser(newUser);
  const { email, displayName, image } = newUser;
  const user = await User.findOne({ where: { email } });

  if (user) throw Conflict(replyMessages.USER_ALREADY_EXISTS);
  await User.create(newUser);  

  return createToken(displayName, email, image);
};

module.exports = { create, getAll };