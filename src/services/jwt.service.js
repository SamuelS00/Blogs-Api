require('dotenv').config();

const jwt = require('jsonwebtoken');
const { User } = require('../database/models/index');

const { JWT_SECRET } = process.env;
const { Unauthorized } = require('../errors/index');
const { TOKEN_NOT_FOUND, TOKEN_EXPIRED } = require('../helpers/replyMessages');

const validateToken = async (token) => {
    if (!token) throw Unauthorized(TOKEN_NOT_FOUND);

    try {
        const { data } = jwt.verify(token, JWT_SECRET);

        const user = await User.findOne(
            { where: { email: data.user.email } },
            { attributes: { exclude: ['password'] } },
        );
    
        if (!user) throw Unauthorized(TOKEN_EXPIRED);
        
        return user;
    } catch (err) {
        throw Unauthorized(TOKEN_EXPIRED);
    }
};

const createToken = (user) => {
    const token = jwt.sign({ data: { user } }, JWT_SECRET, {
      expiresIn: '15m',
      algorithm: 'HS256',
    });

    return token;
};

module.exports = { validateToken, createToken };