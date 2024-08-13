const userDB = require("../../data-access/sql/user-db");

const removeUser = async (userId) => {
  if (!userId) {
    throw new Error("User ID is required.");
  }
  const deleted = await userDB.deleteUser(userId);
  if (!deleted) {
    throw new Error("User not found or not deleted.");
  }
  return deleted;
};

module.exports = removeUser;
