const httpsStatusCode = require('../helpers/replyStatusCode');

function Unauthorized(message) {
    return {
      message,
      statusCode: httpsStatusCode.UNAUTHORIZED,
      stack: Error().stack,
    };
}
  
module.exports = Unauthorized;