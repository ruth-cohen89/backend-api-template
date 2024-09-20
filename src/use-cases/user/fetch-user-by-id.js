const { userDb } = require("../../data-access");
const CustomError = require("../../utils/customError");

const fetchUserById = async (userId) => {
  if (!userId) {
    throw new CustomError("User ID is required.", 400);
  }

  const user = await userDb.getById(userId);

  if (!user) {
    throw new CustomError("User not found.", 404);
  }

  return user;
};

module.exports = fetchUserById;
