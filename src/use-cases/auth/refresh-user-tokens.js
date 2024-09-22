const CustomError = require("@/utils/customError");
const { userDb } = require("../../data-access");

const { verifyRefreshToken, generateTokens } = require("@/utils/jwtUtils");

const refreshUserTokens = async (refreshToken) => {
  const decoded = await verifyRefreshToken(refreshToken);

  const user = await userDb.getById(decoded.userId);
  if (!user || !user.active) {
    throw new CustomError("Your account has been deactivated or deleted.", 403);
  }

  const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
    generateTokens(decoded.userId);

  return { newAccessToken, newRefreshToken };
};

module.exports = refreshUserTokens;
