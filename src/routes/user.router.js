const express = require('express');
const rescue = require('express-rescue');

const userRouter = express.Router();
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middleware/auth.middleware');

userRouter.get('/', authMiddleware, rescue(userController.getAll));
userRouter.get('/:id', authMiddleware, rescue(userController.getById));
userRouter.post('/', rescue(userController.create));
userRouter.delete('/me', authMiddleware, rescue(userController.destroy));

module.exports = userRouter;