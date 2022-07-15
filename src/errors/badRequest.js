const { httpsStatusCode } = require('../helpers/index');

function BadRequest(message) {
    return {
      message,
      statusCode: httpsStatusCode.BAD_REQUEST,
      stack: Error().stack,
    };
}
  
module.exports = BadRequest;