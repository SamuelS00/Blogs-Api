const postService = require('../services/post.service');
const { httpsStatusCode } = require('../helpers/index');
const { validateToken } = require('../services/JWT.service');

const getAll = async (req, res, _next) => {
  const token = req.headers.authorization;
  req.user = await validateToken(token);

  const posts = await postService.getAll();

  return res.status(httpsStatusCode.OK).json(posts);
};

const getById = async (req, res, _next) => {
  const token = req.headers.authorization;
  req.user = await validateToken(token);
  const { id } = req.params;

  const post = await postService.getById(id);

  return res.status(httpsStatusCode.OK).json(post);
};

const create = async (req, res, _next) => {
  const token = req.headers.authorization;
  req.user = await validateToken(token);
  const userId = req.user.dataValues.id;

  const { title, content, categoryIds } = req.body;
  const newPost = await postService.create(userId, title, content, categoryIds);

  return res.status(httpsStatusCode.CREATED).json(newPost);
};

module.exports = { create, getAll, getById };