const catchAsync = require("@/utils/catchAsync");
const CustomError = require("@/utils/customError");

// Autorization
const restrictTo = (
  roles,
  customMessage = "You do not have permission to perform this action"
) =>
  catchAsync(async (req, res, next) => {
    console.log(req.user.role);
    if (!req.user || !roles.includes(req.user.role)) {
      throw new CustomError(customMessage, 403);
    }
    next();
  });
// const restrictTo = (...roles) =>
//   catchAsync(async (req, res, next) => {
//     console.log(req.user.role);
//     if (!req.user || !roles.includes(req.user.role)) {
//       throw new CustomError(
//         "You do not have permission to perform this action",
//         403
//       );
//     }
//     next();
//   });

module.exports = restrictTo;
