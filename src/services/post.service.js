const Sequelize = require('sequelize');
const config = require('../database/config/config');

const sequelize = new Sequelize(config.development);
const { BlogPost, PostCategory } = require('../database/models/index');
const { replyMessages: { FIELDS_ARE_MISSING } } = require('../helpers');
const { validateBody } = require('../helpers/validateBody');
const { newPostSchema } = require('../utils/joi.schemas');
const { validateCategoryIds } = require('./categorie.service');

const create = async (userId, title, content, categoryIds) => {
  await validateCategoryIds(categoryIds);
  validateBody(newPostSchema, { title, content, categoryIds }, FIELDS_ARE_MISSING);
  
  try {
    const result = await sequelize.transaction(async (t) => {
      const newPost = await BlogPost.create(
        { userId, title, content },
        { transaction: t },
      );

      const postsAndCateries = categoryIds.map((cId) => (
        { categoryId: cId, postId: newPost.id }
      ));

      await Promise.all([postsAndCateries.map((post) => PostCategory.create(post))]);

      return newPost;
    });

    return result;
  } catch (err) {
    throw Error(err.message);
  }
};

module.exports = { create };