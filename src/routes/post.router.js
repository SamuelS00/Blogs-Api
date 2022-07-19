const express = require('express');
const rescue = require('express-rescue');

const postRouter = express.Router();
const postController = require('../controllers/post.controller');

postRouter.post('/', rescue(postController.create));

postRouter.get('/', rescue(postController.getAll));

module.exports = postRouter;
