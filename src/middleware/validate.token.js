require('dotenv').config();
const jwt = require('jsonwebtoken');
const { User } = require('../database/models/index');

const { JWT_SECRET } = process.env;
const UnauthorizedError = require('../errors/unauthorizedError');

const { replyMessages, httpsStatusCode } = require('../helpers/index');

const validateToken = async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) throw UnauthorizedError(replyMessages.TOKEN_NOT_FOUND);

    try {
        const { data } = jwt.verify(token, JWT_SECRET);

        const user = await User.findOne(
            { where: { email: data.user.email } },
            { attributes: { exclude: ['password'] } },
        );
    
        if (!user) throw UnauthorizedError(replyMessages.TOKEN_EXPIRED);
        
        req.user = user;
    
        next();
    } catch (err) {
        res.status(httpsStatusCode.UNAUTHORIZED).json(
            { message: replyMessages.TOKEN_EXPIRED },
        );
    }
};

module.exports = validateToken;