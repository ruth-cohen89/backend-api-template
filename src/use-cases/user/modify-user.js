const { userDb } = require("../../data-access");
const CustomError = require("../../utils/customError");
const { hashPassword } = require("@/utils/passwordUtils");

const modifyUser = async (userId, userData) => {
  if (!userId) {
    throw new CustomError("User ID is required.", 400);
  }

  const { password, ...otherUserInfo } = userData;
  if (password) {
    const hashedPassword = await hashPassword(password);
    userData = { password: hashedPassword, ...otherUserInfo };
  }

  const updated = await userDb.update(userId, userData);
  if (!updated) {
    throw new CustomError("User not found.", 404);
  }
  return updated;
};

module.exports = modifyUser;
