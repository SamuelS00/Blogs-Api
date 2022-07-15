const { httpsStutusCode } = require('../helpers/index');

function BadRequest(message) {
    return {
      message,
      statusCode: httpsStutusCode.BadRequest,
      stack: Error().stack,
    };
}
  
module.exports = BadRequest;