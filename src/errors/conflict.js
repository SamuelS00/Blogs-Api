const { httpsStutusCode } = require('../helpers/index');

function Conflict(message) {
    return {
      message,
      statusCode: httpsStutusCode.CONFLICT,
      stack: Error().stack,
    };
}
  
module.exports = Conflict;