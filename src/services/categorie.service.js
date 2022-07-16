const { Category } = require('../database/models/index');
const { validateBody } = require('../helpers/validateBody');
const { newCategorieSchema } = require('../utils/joi.schemas');

const create = async (name) => {
  validateBody(newCategorieSchema, { name });
  const newCategorie = await Category.create({ name });

  return newCategorie;
};

module.exports = { create };