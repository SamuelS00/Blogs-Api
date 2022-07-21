const categorieService = require('../services/categorie.service');
const { OK, CREATED } = require('../helpers/replyStatusCode');

const getAll = async (req, res, _next) => {
  const categories = await categorieService.getAll();
  
  return res.status(OK).json(categories);
};

const create = async (req, res, _next) => {
  const { name } = req.body;
  const newCategorie = await categorieService.create(name);

  return res.status(CREATED).json(newCategorie);
};

module.exports = { create, getAll };