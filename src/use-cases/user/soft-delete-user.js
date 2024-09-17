const { userDb } = require("../../data-access");
const CustomError = require("../../utils/customError");

const softDeleteUser = async (userId) => {
  if (!userId) {
    throw new CustomError("User ID is required.", 400);
  }

  const updated = await userDb.update(userId, { active: false });
  if (!updated) {
    throw new CustomError("User not found.", 404);
  }

  return updated;
};

module.exports = softDeleteUser;
