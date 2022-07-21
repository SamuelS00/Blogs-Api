const authServices = require('../services/auth.service');
const { OK } = require('../helpers/replyStatusCode');

const login = async (req, res, _next) => {
  const { email, password } = req.body;
  const token = await authServices.login(email, password);

  return res.status(OK).json({ token });
};

module.exports = { login };