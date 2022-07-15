require('dotenv').config();
const jwt = require('jsonwebtoken');
const { User } = require('../database/models/index');

const { JWT_SECRET } = process.env;
const UnauthorizedError = require('../errors/unauthorizedError');

const { httpsStatusCode, replyMessages } = require('../helpers/index');

const validateToken = async (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) return UnauthorizedError(replyMessages.TOKEN_NOT_FOUND);

    const decoded = jwt.verify(token, JWT_SECRET);

    const user = await User.findOne(
        { where: { email: decoded.data.user.email } },
        { attributes: { exclude: ['password'] } },
    );

    if (!user) {
        return res.status(httpsStatusCode.UNAUTHORIZED).json(
            { message: replyMessages.TOKEN_EXPIRED },
        );
    }

    req.user = user;

    next();
};

module.exports = validateToken;