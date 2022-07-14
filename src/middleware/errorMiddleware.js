const ErrorMiddleware = (err, _req, res, _next) => {
    console.log(err, 'Error middleware');
  
    if (err.statusCode) {
      return res.status(err.statusCode).json({ message: err.message });
    }
  
    res
      .status(500)
      .json({ message: 'Internal Server Error' });
};

module.exports = ErrorMiddleware;