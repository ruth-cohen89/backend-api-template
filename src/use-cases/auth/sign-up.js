const { userDb } = require("../../data-access");
const { hashPassword } = require("@/utils/passwordUtils");
const { sendVerificationEmail } = require("@/utils/emailUtils");
const { generateVerificationToken } = require("@/utils/tokenUtils");

const signUp = async (userData) => {
  const { password, ...otherUserInfo } = userData;
  const hashedPassword = await hashPassword(password);

  const {
    token: verifyToken,
    hashedToken,
    expiration,
  } = generateVerificationToken();

  const newUser = {
    ...otherUserInfo,
    password: hashedPassword,
    emailVerified: false,
    verificationToken: hashedToken,
    verificationTokenExpires: expiration,
  };

  const savedUser = await userDb.create(newUser);
  await sendVerificationEmail(savedUser, verifyToken);

  return savedUser;
};

module.exports = signUp;
