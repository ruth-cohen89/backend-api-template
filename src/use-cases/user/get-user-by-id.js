const { userDb } = require("../../data-access");
const CustomError = require("@/utils/customError");

const getUserById = async (
  userId,
  customMessage = "User not found",
  statusCode = 404
) => {
  if (!userId) {
    throw new CustomError("User ID is required.", 400);
  }

  const user = await userDb.getById(userId);

  if (!user) {
    throw new CustomError(customMessage, statusCode);
  }

  return user;
};

module.exports = getUserById;
