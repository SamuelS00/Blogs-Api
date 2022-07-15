const httpsStatusCode = require('../helpers/replyStatusCode');

function BadRequest(message) {
    return {
      message,
      statusCode: httpsStatusCode.BAD_REQUEST,
      stack: Error().stack,
    };
}
  
module.exports = BadRequest;