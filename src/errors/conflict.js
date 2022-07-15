function Conflict(message) {
    return {
      message,
      statusCode: 409,
      stack: Error().stack,
    };
}
  
module.exports = Conflict;