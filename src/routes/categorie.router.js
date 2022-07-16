const express = require('express');
const rescue = require('express-rescue');

const categorieRouter = express.Router();

const categorieController = require('../controllers/categorie.controller');

categorieRouter.get('/', rescue(categorieController.getAll));
categorieRouter.post('/', rescue(categorieController.create));

module.exports = categorieRouter;