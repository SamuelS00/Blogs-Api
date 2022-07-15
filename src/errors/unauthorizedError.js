const httpsStatusCode = require('../helpers/replyStatusCode');

function UnauthorizedError(message) {
    return {
      message,
      statusCode: httpsStatusCode.UNAUTHORIZED,
      stack: Error().stack,
    };
}
  
module.exports = UnauthorizedError;