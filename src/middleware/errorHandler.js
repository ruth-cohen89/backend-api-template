const CustomError = require("../utils/customError");

const handleCastErrorDB = (res, err) => {
  return res
    .status(400)
    .json({ message: `Invalid ${err.path}: ${err.value}.` });
};

const handleValidationError = (res, err) => {
  const errors = Object.values(err.errors).map((error) => error.message);
  return res.status(400).json({ message: errors.join(", ") });
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

  if (err.name === "ValidationError") {
    return handleValidationError(res, err);
  }

  if (err.name === "CastError") {
    return handleCastErrorDB(res, err);
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
