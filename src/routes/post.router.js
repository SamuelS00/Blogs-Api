const express = require('express');
const rescue = require('express-rescue');

const postRouter = express.Router();
const postController = require('../controllers/post.controller');

postRouter.post('/', rescue(postController.create));

postRouter.get('/', rescue(postController.getAll));

postRouter.get('/:id', rescue(postController.getById));

postRouter.put('/:id', rescue(postController.update));

postRouter.delete('/:id', rescue(postController.destroy));

module.exports = postRouter;
