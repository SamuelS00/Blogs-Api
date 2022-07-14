require('dotenv/config');

const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const createToken = (user) => {
    const token = jwt.sign({ data: { user } }, JWT_SECRET, {
      expiresIn: '15m',
      algorithm: 'HS256',
    });

    return token;
};

module.exports = { createToken };