const express = require('express');
const rescue = require('express-rescue');

const userRouter = express.Router();
const userController = require('../controllers/user.controller');
const validateToken = require('../middleware/validate.token');

userRouter.get('/', rescue(validateToken), rescue(userController.getAll));
userRouter.post('/', rescue(userController.create));

module.exports = userRouter;