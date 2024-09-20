const { userDb } = require("../../data-access");
const CustomError = require("../../utils/customError");
const { hashPassword, correctPassword } = require("@/utils/passwordUtils");

const changeMyPassword = async (
  userId,
  currentPassword,
  oldPassword,
  newPassword
) => {
  const user = await userDb.getById(userId);
  if (!user || !user.active) {
    throw new CustomError("Your account has been deactivated or deleted.", 403);
  }

  if (!(await correctPassword(oldPassword, currentPassword))) {
    throw new CustomError("Old password is incorrect.", 400);
  }
  const hashedPassword = await hashPassword(newPassword);

  const updated = await userDb.update(userId, { password: hashedPassword });

  return updated;
};

module.exports = changeMyPassword;
