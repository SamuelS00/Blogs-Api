const express = require('express');
const rescue = require('express-rescue');

const authRouter = express.Router();
const authController = require('../controllers/auth.controller');

authRouter.post('/', rescue(authController.login));

module.exports = authRouter;