const userService = require('../services/user.service');
const { httpsStatusCode } = require('../helpers/index');

const getAll = async (req, res, _next) => {
  const users = await userService.getAll();

  return res.status(httpsStatusCode.OK).json(users);
};

const create = async (req, res, _next) => {
  const { displayName, email, password, image } = req.body;
  const token = await userService.create({ displayName, email, password, image });

  return res.status(httpsStatusCode.CREATED).json({ token });
};

module.exports = { create, getAll };