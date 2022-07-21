const express = require('express');
const rescue = require('express-rescue');

const categorieRouter = express.Router();
const categorieController = require('../controllers/categorie.controller');
const authMiddleware = require('../middleware/auth.middleware');

categorieRouter.get('/', authMiddleware, rescue(categorieController.getAll));
categorieRouter.post('/', authMiddleware, rescue(categorieController.create));

module.exports = categorieRouter;