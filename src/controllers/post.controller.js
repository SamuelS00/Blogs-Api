const postService = require('../services/post.service');
const { OK, CREATED, NO_CONTENT } = require('../helpers/replyStatusCode');

const getAll = async (req, res, _next) => {
  const posts = await postService.getAll();

  return res.status(OK).json(posts);
};

const getById = async (req, res, _next) => {
  const { id } = req.params;
  const post = await postService.getById(id);

  return res.status(OK).json(post);
};

const create = async (req, res, _next) => { // testar userId
  const userId = req.user.dataValues.id;
  const { title, content, categoryIds } = req.body;
  const newPost = await postService.create(userId, title, content, categoryIds);

  return res.status(CREATED).json(newPost);
};

const update = async (req, res, _next) => {
  const userId = req.user.dataValues.id;
  const { id } = req.params;
  const { title, content } = req.body;
  const updatedPost = await postService.update(id, userId, title, content);

  return res.status(OK).json(updatedPost);
};

const destroy = async (req, res, _next) => {
  const userId = req.user.dataValues.id;
  const { id } = req.params;
  await postService.destroy(+id, userId);

  return res.status(NO_CONTENT).end();
};

const search = async (req, res, _next) => {
  const { q } = req.query;
  const searchedPost = await postService.search(q);

  return res.status(OK).json(searchedPost);
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  destroy,
  search,
};