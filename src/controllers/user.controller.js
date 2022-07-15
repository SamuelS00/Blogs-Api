const userService = require('../services/user.service');
const httpStatusCode = require('../helpers/httpsStatusCode');

const create = async (req, res, _next) => {
  const { displayName, email, password, image } = req.body;
  const token = await userService.create({ displayName, email, password, image });

  return res.status(httpStatusCode.ACCEPTED).json({ token });
};

module.exports = { create };