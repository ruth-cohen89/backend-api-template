const catchAsync = require("@/utils/catchAsync");
const CustomError = require("@/utils/customError");

// Autorization
const restrictTo = (
  roles,
  customMessage = "You do not have permission to perform this action"
) =>
  catchAsync(async (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
      throw new CustomError(customMessage, 403);
    }
    next();
  });

module.exports = restrictTo;
