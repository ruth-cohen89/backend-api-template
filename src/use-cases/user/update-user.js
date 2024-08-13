// use-cases/user/update-user.js

const userDB = require("../../data-access/sql/user-db");

const updateUser = async (userId, userData) => {
  if (!userId) {
    throw new Error("User ID is required.");
  }
  const updated = await userDB.updateUser(userId, userData);
  if (!updated) {
    throw new Error("User not found or not updated.");
  }
  return updated;
};

module.exports = updateUser;
