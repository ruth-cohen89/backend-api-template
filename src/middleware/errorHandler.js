const CustomError = require("../utils/customError");

const handleCastErrorDB = (err) => {
  const message = `Invalid ${err.path}: ${err.value}.`;
  return new CustomError(message, 400);
};
const formatDuplicateKeyError = (err) => {
  if (err.code === 11000 && err.keyValue) {
    const field = Object.keys(err.keyValue)[0];
    const value = err.keyValue[field];
    return `Duplicate value for ${field}: ${value}. Please use a unique value.`;
  }
  return "A duplicate key error occurred.";
};

const handleJsonSyntaxError = (res) => {
  return res.status(400).json({ message: "Bad JSON format" });
};

const errorHandler = (err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    return handleJsonSyntaxError(res);
  }

  // Operational errors (including CustomErrors)
  if (err.isOperational) {
    return res.status(err.statusCode).json({ message: err.message });
  }

  if (err.name === "CastError") {
    err = handleCastErrorDB(err);
  }

  if (err.name === "JsonWebTokenError") {
    return res.status(401).json({ message: err.message });
  }

  // MongoDB duplicate key errors)
  if (err.code === 11000) {
    const message = formatDuplicateKeyError(err);
    return res.status(400).json({ message });
  }

  // Log unexpected errors (programmic)
  console.error("Error stack:", err.stack);

  res
    .status(500)
    .json({ message: "Internal server error. Please try again later." });
};

module.exports = errorHandler;
