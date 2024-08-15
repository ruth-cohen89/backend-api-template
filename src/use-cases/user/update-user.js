// use-cases/user/update-user.js

const { userDb } = require("../../data-access");

const updateUser = async (userId, userData) => {
  if (!userId) {
    throw new Error("User ID is required.");
  }
  const updated = await userDb.updateUser(userId, userData);
  if (!updated) {
    throw new Error("User not found or not updated.");
  }
  return updated;
};

module.exports = updateUser;
