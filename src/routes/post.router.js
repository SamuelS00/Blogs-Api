const express = require('express');
const rescue = require('express-rescue');

const postRouter = express.Router();
const postController = require('../controllers/post.controller');

postRouter.get('/', rescue(postController.getAll));

postRouter.get('/search', rescue(postController.search));

postRouter.get('/:id', rescue(postController.getById));

postRouter.post('/', rescue(postController.create));

postRouter.put('/:id', rescue(postController.update));

postRouter.delete('/:id', rescue(postController.destroy));

// postRouter.search('/', rescue(postController.search)); o teste não cobre...

module.exports = postRouter;
