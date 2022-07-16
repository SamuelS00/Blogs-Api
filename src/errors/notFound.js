const httpsStatusCode = require('../helpers/replyStatusCode');

function NotFound(message) {
    return {
      message,
      statusCode: httpsStatusCode.NOT_FOUND,
      stack: Error().stack,
    };
}
  
module.exports = NotFound;