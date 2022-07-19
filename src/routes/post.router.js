const express = require('express');
const rescue = require('express-rescue');

const postRouter = express.Router();

const postController = require('../controllers/post.controller');

postRouter.post('/', rescue(postController.create));

module.exports = postRouter;
