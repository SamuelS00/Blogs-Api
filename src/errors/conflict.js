const httpsStatusCode = require('../helpers/replyStatusCode');

function Conflict(message) {
    return {
      message,
      statusCode: httpsStatusCode.CONFLICT,
      stack: Error().stack,
    };
}
  
module.exports = Conflict;