const userService = require('../services/user.service');
const { httpsStatusCode } = require('../helpers/index');
const { validateToken } = require('../services/JWT.service');

const getAll = async (req, res, _next) => {
  const token = req.headers.authorization;
  req.user = await validateToken(token);
  const users = await userService.getAll();

  return res.status(httpsStatusCode.OK).json(users);
};

const getById = async (req, res, _next) => {
  const token = req.headers.authorization;
  const { id } = req.params;
  req.user = await validateToken(token);
  const user = await userService.getById(id);

  return res.status(httpsStatusCode.OK).json(user);
};

const create = async (req, res, _next) => {
  const { displayName, email, password, image } = req.body;
  const token = await userService.create({ displayName, email, password, image });

  return res.status(httpsStatusCode.CREATED).json({ token });
};

const destroy = async (req, res, _next) => {
  const token = req.headers.authorization;
  req.user = await validateToken(token);
  const userId = req.user.dataValues.id;
  await userService.destroy(userId);

  res.status(httpsStatusCode.NO_CONTENT).end();
};

module.exports = { create, getAll, getById, destroy };