const authServices = require('../services/auth.service');
const { httpStatusCode } = require('../helpers/index');

const login = async (req, res, _next) => {
  const { email, password } = req.body;

  const token = await authServices.login(email, password);

  return res.status(httpStatusCode.OK).json({ token });
};

module.exports = { login };