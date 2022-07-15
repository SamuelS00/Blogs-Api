const { httpsStutusCode } = require('../helpers/index');

function UnauthorizedError(message) {
    return {
      message,
      statusCode: httpsStutusCode.UNAUTHORIZED,
      stack: Error().stack,
    };
}
  
module.exports = UnauthorizedError;