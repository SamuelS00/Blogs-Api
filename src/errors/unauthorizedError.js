function UnauthorizedError(message) {
    return {
      message,
      statusCode: 400,
      stack: Error().stack,
    };
}
  
module.exports = UnauthorizedError;