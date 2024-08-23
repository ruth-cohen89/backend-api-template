const CustomError = require("../utils/customError");

const handleCastErrorDB = (err) => {
  const message = `Invalid ${err.path}: ${err.value}.`;
  return new CustomError(message, 400);
};

const errorHandler = (err, req, res, next) => {
  if (err.name === "CastError") {
    err = handleCastErrorDB(err);
  }

  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({ message: err.message });
  }

  // For unexpected errors
  console.error(err); // Log the error details for debugging
  res.status(500).json({ message: "Something went wrong" });
};

module.exports = errorHandler;
