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

// Function to handle JSON syntax errors
const handleJsonSyntaxError = (res) => {
  return res.status(400).json({ message: "Bad JSON format" });
};

const errorHandler = (err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    return handleJsonSyntaxError(res);
  }

  if (err.name === "CastError") {
    err = handleCastErrorDB(err);
  }

  // Handle MongoDB errors (e.g., duplicate key errors)
  if (err.code === 11000) {
    const message = formatDuplicateKeyError(err);
    return res.status(400).json({ message });
  }

  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({ message: err.message });
  }

  // For unexpected errors
  console.error(err); // Log the error details for debugging
  res.status(500).json({ message: "Something went wrong" });
};

module.exports = errorHandler;
