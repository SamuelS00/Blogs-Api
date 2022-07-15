const { httpsStatusCode } = require('../helpers/index');

function UnauthorizedError(message) {
    return {
      message,
      statusCode: httpsStatusCode.UNAUTHORIZED,
      stack: Error().stack,
    };
}
  
module.exports = UnauthorizedError;