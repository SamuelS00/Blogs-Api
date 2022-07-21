const userService = require('../services/user.service');
const { OK, CREATED, NO_CONTENT } = require('../helpers/replyStatusCode');

const getAll = async (req, res, _next) => {
  const users = await userService.getAll();

  return res.status(OK).json(users);
};

const getById = async (req, res, _next) => {
  const { id } = req.params;
  const user = await userService.getById(id);

  return res.status(OK).json(user);
};

const create = async (req, res, _next) => {
  const { displayName, email, password, image } = req.body;
  const token = await userService.create({ displayName, email, password, image });

  return res.status(CREATED).json({ token });
};

const destroy = async (req, res, _next) => {
  const userId = req.user.dataValues.id;
  await userService.destroy(userId);

  res.status(NO_CONTENT).end();
};

module.exports = { 
  create,
  getAll,
  getById,
  destroy,
};