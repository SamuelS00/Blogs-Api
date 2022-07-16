const express = require('express');
const rescue = require('express-rescue');

const categorieRouter = express.Router();

const categorieController = require('../controllers/categorie.controller');

categorieRouter.post('/', rescue(categorieController.create));

module.exports = categorieRouter;