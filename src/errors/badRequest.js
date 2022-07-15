const { httpsStatusCode } = require('../helpers/index');

function BadRequest(message) {
    return {
      message,
      statusCode: httpsStatusCode.BadRequest,
      stack: Error().stack,
    };
}
  
module.exports = BadRequest;