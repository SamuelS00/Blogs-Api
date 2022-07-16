const categorieService = require('../services/categorie.service');
const { validateToken } = require('../services/JWT.service');
const { httpsStatusCode } = require('../helpers');

const getAll = async (req, res, _next) => {
  const token = req.headers.authorization;
  req.user = await validateToken(token);

  const categories = await categorieService.getAll();
  
  return res.status(httpsStatusCode.OK).json(categories);
};

const create = async (req, res, _next) => {
  const token = req.headers.authorization;
  req.user = await validateToken(token);
  
  const { name } = req.body;
  const newCategorie = await categorieService.create(name);

  return res.status(httpsStatusCode.CREATED).json(newCategorie);
};

module.exports = { create, getAll };