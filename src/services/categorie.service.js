const { Category } = require('../database/models/index');
const { validateNewCategory } = require('../helpers/validateBody');

const create = async (name) => {
  validateNewCategory(name);
  const newCategorie = await Category.create({ name });

  return newCategorie;
};

module.exports = { create };