const { userDb } = require("../../data-access");
const CustomError = require("../../utils/customError");
const { hashPassword, correctPassword } = require("@/utils/passwordUtils");

const updateMyPassword = async (
  userId,
  currentPassword,
  oldPassword,
  newPassword
) => {
  if (!(await correctPassword(oldPassword, currentPassword))) {
    throw new CustomError("Old password is incorrect.", 400);
  }
  const hashedPassword = await hashPassword(newPassword);

  const updated = await userDb.update(userId, { password: hashedPassword });

  if (!updated) {
    throw new CustomError("User not found.", 404);
  }
  return updated;
};

module.exports = updateMyPassword;
