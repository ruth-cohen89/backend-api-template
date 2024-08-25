const crypto = require("crypto");

emailConfirm = catchAsync(async (req, res, next) => {
  const hashedToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");
  const user = await User.findOne({
    confirmEmailToken: hashedToken,
    confirmEmailExpires: { $gt: Date.now() },
  });
  if (!user) {
    return next(new AppError("Token is invalid or has expired", 400));
  }

  user.emailConfirmed = true;
  user.confirmEmailToken = undefined;
  user.confirmEmailExpires = undefined;
  await user.save({ validateBeforeSave: false });
  createSendToken(user, 200, req, res);
});

// TODO: move these functions
const createEmailConfirmToken = () => {
  const confirmToken = crypto.randomBytes(32).toString("hex");
  this.confirmEmailToken = crypto
    .createHash("sha256")
    .update(confirmToken)
    .digest("hex");

  this.confirmEmailExpires = Date.now() + 1000 * 60 * 60 * 24 * 3;
  console.log("created", confirmToken);
  return confirmToken;
};

// userSchema.methods.createPasswordResetToken = function () {
//   const resetToken = crypto.randomBytes(32).toString('hex');
//   this.passwordResetToken = crypto
//     .createHash('sha256')
//     .update(resetToken)
//     .digest('hex');
//   this.passwordResetExpires = Date.now() + 10 * 60 * 1000;
//   return resetToken;
// };
module.exports = { emailConfirm, createEmailConfirmToken };
