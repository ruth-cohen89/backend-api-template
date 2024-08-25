const { userDb } = require("../../data-access");
const { hashPassword } = require("@/utils/passwordUtils");
const { sendConfirmationEmail } = require("@/utils/emailUtils");
const crypto = require("crypto");

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

const signUp = async (userData) => {
  const { password, ...otherUserInfo } = userData;
  const hasedPassword = await hashPassword(password);
  const newUser = { ...otherUserInfo, password: hasedPassword };

  const savedUser = await userDb.create(newUser);
  const confirmToken = createEmailConfirmToken();

  await sendConfirmationEmail(savedUser, confirmToken);
  return savedUser;
};

module.exports = signUp;

// await user.save({ validateBeforeSave: false });
