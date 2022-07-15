const { httpsStatusCode } = require('../helpers/index');

function Conflict(message) {
    return {
      message,
      statusCode: httpsStatusCode.CONFLICT,
      stack: Error().stack,
    };
}
  
module.exports = Conflict;