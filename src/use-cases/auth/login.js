const { userDb } = require("../../data-access");
const CustomError = require("@/utils/customError");
const { correctPassword } = require("@/utils/passwordUtils");
const { generateTokens } = require("@/utils/jwtUtils");

const login = async (userData) => {
  const { username, password } = userData;
  const user = await userDb.findOne({ username });

  if (!user || !(await correctPassword(password, user.password))) {
    throw new CustomError("Invalid username or password", 401);
  }

  if (!user.emailVerified) {
    throw new CustomError("You have not confirmed your email address", 401);
  }

  if (!user.active) {
    throw new CustomError(
      "Your account has been deactivated. Please contact support if you need assistance.",
      401
    );
  }

  const { accessToken, refreshToken } = generateTokens(user._id);
  return { accessToken, refreshToken };
};

module.exports = login;
