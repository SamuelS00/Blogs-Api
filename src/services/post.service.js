const Sequelize = require('sequelize');
const config = require('../database/config/config');

const sequelize = new Sequelize(config.development);
const { BlogPost, PostCategory, Category, User } = require('../database/models/index');

const { NotFound, Unauthorized } = require('../errors/index');
const { replyMessages: { FIELDS_ARE_MISSING } } = require('../helpers');
const { validateBody } = require('../helpers/validateBody');
const { newPostSchema, updatePostSchema } = require('../utils/joi.schemas');
const { validateCategoryIds } = require('./categorie.service');

const getAll = async () => {
  const posts = await BlogPost.findAll(
    { 
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    },
  );

  return posts;
};

const getById = async (id) => {
  const post = await BlogPost.findOne(
    { 
      where: { id },
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    },
  );

  if (!post) throw NotFound('Post does not exist');

  return post;
};

const getByUserId = async (userId) => {
  const post = await BlogPost.findAll(
    { 
      where: { userId },
    },
  );

  if (!post) throw NotFound('Post does not exist');

  return post;
};

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

const update = async (id, userId, title, content) => {
  validateBody(updatePostSchema, { title, content }, FIELDS_ARE_MISSING);

  const post = await getById(id);  
  if (post.user.id !== userId) throw Unauthorized('Unauthorized user');

  await BlogPost.update(
    { title, content }, 
    { where: { id } },
  );

  const updatedPost = getById(id);

  return updatedPost;
};

const destroy = async (id, userId) => {  
  const post = await getById(id); 

  if (post.dataValues.userId !== userId) throw Unauthorized('Unauthorized user');

  await sequelize.transaction(async (t) => {
      await PostCategory.destroy(
        { where: { postId: id } },
        { transaction: t },
      );

      await BlogPost.destroy(
        { where: { id } },
        { transaction: t },
      );
  });
};

module.exports = { create, getAll, getById, update, destroy, getByUserId };