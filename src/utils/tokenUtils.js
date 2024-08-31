const crypto = require("crypto");

const hashToken = (token) => {
  return crypto.createHash("sha256").update(token).digest("hex");
};

const generateVerificationToken = () => {
  const token = crypto.randomBytes(32).toString("hex");
  const hashedToken = hashToken(token);

  const expiration = Date.now() + 3600000; // 1 hour from now
  return { token, hashedToken, expiration };
};

// Validate the confirm email token
// TODO
// emailConfirm = catchAsync(async (req, next) => {
//   const hashedToken = crypto
//     .createHash("sha256")
//     .update(req.params.token)
//     .digest("hex");
//   const user = await User.findOne({
//     confirmEmailToken: hashedToken,
//     confirmEmailExpires: { $gt: Date.now() },
//   });
//   if (!user) {
//     return next(new AppError("Token is invalid or has expired", 400));
//   }

//   user.emailConfirmed = true;
//   await user.save({ validateBeforeSave: false });
// });

// TODO:
// createPasswordResetToken = function () {
//   const resetToken = crypto.randomBytes(32).toString('hex');
//   this.passwordResetToken = crypto
//     .createHash('sha256')
//     .update(resetToken)
//     .digest('hex');
//   this.passwordResetExpires = Date.now() + 10 * 60 * 1000;
//   return resetToken;
// };

// const generateHashToken = (token) =>
//   crypto.createHash('sha256').update(token).digest('hex');

module.exports = { generateVerificationToken, hashToken };
