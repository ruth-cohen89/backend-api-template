const { userDb } = require("../../data-access");
const CustomError = require("../../utils/customError");

const updateUser = async (userId, userData) => {
  if (!userId) {
    throw new CustomError("User ID is required.", 400);
  }
  const updated = await userDb.update(userId, userData);
  if (!updated) {
    throw new CustomError("User not found.", 404);
  }
  return updated;
};

module.exports = updateUser;
