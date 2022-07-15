const { replyMessages, httpsStatusCode } = require('../helpers/index');

const ErrorMiddleware = (err, _req, res, _next) => {
    console.log(err, 'Error Middleware');
  
    if (err.statusCode) {
      return res.status(err.statusCode).json({ message: err.message });
    }
  
    res
      .status(httpsStatusCode.INTERNAL_SERVER)
      .json({ message: replyMessages.INTERNAL_SERVER_ERROR });
};

module.exports = ErrorMiddleware;