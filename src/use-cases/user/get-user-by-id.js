const { userDb } = require("../../data-access");

const getUserById = async (userId) => {
  if (!userId) {
    throw new Error("User ID is required.");
  }
  const user = await userDb.getUserById(userId);
  return user;
};

module.exports = getUserById;
