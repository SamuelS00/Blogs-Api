function BadRequest(message) {
    return {
      message,
      statusCode: 400,
      stack: Error().stack,
    };
}
  
module.exports = BadRequest;