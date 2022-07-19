const { Category } = require('../database/models/index');
const BadRequest = require('../errors/badRequest');
const { validateBody } = require('../helpers/validateBody');
const { newCategorieSchema } = require('../utils/joi.schemas');

const getAll = async () => {
  const categories = await Category.findAll();

  return categories;
};

const create = async (name) => {
  validateBody(newCategorieSchema, { name });
  const newCategorie = await Category.create({ name });

  return newCategorie;
};

const validateCategoryIds = async (categoryIds) => {
  const categories = categoryIds.map((id) => Category.findOne({ where: id }));

  const resultCategories = await Promise.all(categories)
    .then((values) => values.every((v) => v !== null));

  if (!resultCategories) throw BadRequest('"categoryIds" not found');
};

module.exports = { create, getAll, validateCategoryIds };