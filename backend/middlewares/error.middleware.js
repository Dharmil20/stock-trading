const errorMiddleware = (err, req, res, next) => {
    try {
      let error = { ...err };
  
      error.message = err.message;
  
      console.error(error);
  
      // Mongoose bad ObjectId
      if (err.name === "CastError") {
        const message = "Resource not found";
        error = new Error(message);
        error.statusCode = 404;
      }
  
      // Mongoose Duplicate Key
      if (err.name === 11000) {
        const message = "Duplicate Field Value Entered";
        error = new Error(message);
        error.statusCode = 400;
      }
  
      // Mongoose Validation Error
      if (err.name === "ValidationError") {
        const message = Object.values(err.errors).map((val) => val.message);
        error = new Error(message);
        error.statusCode = 400;
      }
  
      res.status(error.statusCode || 500).json({success: false, error: error.message || 'Server Error'});
    } catch (error) {
      next(error);
    }
  };
  
  export default errorMiddleware;
  