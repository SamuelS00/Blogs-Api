const BadRequest = require('./badRequest');
const Conflict = require('./conflict');
const NotFound = require('./notFound');
const Unauthorized = require('./unauthorized');

module.exports = { NotFound, Conflict, Unauthorized, BadRequest };