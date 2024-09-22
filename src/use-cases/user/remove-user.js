const { userDb } = require("../../data-access");
const CustomError = require("../../utils/customError");

const removeUser = async (userId) => {
  if (!userId) {
    throw new CustomError("User ID is required.", 400);
  }

  const deleted = await userDb.delete(userId);
  if (!deleted) {
    throw new CustomError("User not found.", 404);
  }
  return deleted;
};

module.exports = removeUser;
