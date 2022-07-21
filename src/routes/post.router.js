const express = require('express');
const rescue = require('express-rescue');

const postRouter = express.Router();
const postController = require('../controllers/post.controller');
const authMiddleware = require('../middleware/auth.middleware');

postRouter.get('/', authMiddleware, rescue(postController.getAll));
postRouter.get('/search', authMiddleware, rescue(postController.search));
postRouter.get('/:id', authMiddleware, rescue(postController.getById));
postRouter.post('/', authMiddleware, rescue(postController.create));
postRouter.put('/:id', authMiddleware, rescue(postController.update));
postRouter.delete('/:id', authMiddleware, rescue(postController.destroy));
// postRouter.search('/', authMiddleware, rescue(postController.search)); o teste não cobre...

module.exports = postRouter;
