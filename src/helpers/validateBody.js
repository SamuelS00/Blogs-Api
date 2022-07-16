const BadRequest = require('../errors/badRequest');

const validateBody = (schema, body, errMsg = undefined) => {
  const { error } = schema.validate(body);

  if (error) throw BadRequest(errMsg || error.message);
};

module.exports = { validateBody };