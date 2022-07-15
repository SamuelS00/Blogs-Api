const authServices = require('../services/auth.service');
const httpStatusCode = require('../helpers/httpsStatusCode');

const login = async (req, res, _next) => {
  const { email, password } = req.body;

  console.log(email, password);

  const token = await authServices.login(email, password);

  return res.status(httpStatusCode.OK).json({ token });
};

module.exports = { login };