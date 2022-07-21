const { validateToken } = require('../services/jwt.service');

const authMiddleware = async (req, _res, next) => {
  try {
    const token = req.headers.authorization;
    const dataValues = await validateToken(token);

    req.user = dataValues;

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = authMiddleware;