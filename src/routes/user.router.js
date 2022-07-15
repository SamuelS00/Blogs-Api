const express = require('express');
const rescue = require('express-rescue');

const userRouter = express.Router();
const userController = require('../controllers/user.controller');

userRouter.post('/', rescue(userController.create));

module.exports = userRouter;