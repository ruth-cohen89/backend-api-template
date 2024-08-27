const { userDb } = require("../../data-access");
const { hashPassword } = require("@/utils/passwordUtils");
const { sendVerificationEmail } = require("@/utils/emailUtils");
const { generateVerificationToken } = require("@/utils/tokenUtils");
const crypto = require("crypto");

const signUp = async (userData) => {
  const { password, ...otherUserInfo } = userData;
  const hasedPassword = await hashPassword(password);
  const newUser = { ...otherUserInfo, password: hasedPassword };

  const savedUser = await userDb.create(newUser);
  const {
    token: verifyToken,
    hashedToken,
    expiration,
  } = generateVerificationToken();

  console.log(verifyToken, hashedToken, expiration);
  // TODO: save hashedToken, expiration in UserDb

  await sendVerificationEmail(savedUser, verifyToken);
  return savedUser;
};

module.exports = signUp;
