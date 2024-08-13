const userDB = require("../../data-access/sql/user-db");

const getUserById = async (userId) => {
  if (!userId) {
    throw new Error("User ID is required.");
  }
  const user = await userDB.getUserById(userId);
  return user;
};

module.exports = getUserById;
