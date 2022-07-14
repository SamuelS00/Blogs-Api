const authServices = require('../services/auth.service');

const login = async (req, res, _next) => {
  const { email, password } = req.body;

  console.log(email, password);

  const token = await authServices.login(email, password);

  return res.status(200).json({ token });
};

module.exports = { login };