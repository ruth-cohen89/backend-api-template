const createUser = require("./create-user");
const getUserById = require("./get-user-by-id");
const updateUser = require("./update-user");
const removeUser = require("./remove-user");
const getAllUsers = require("./get-all-users");

// Export all user use cases
module.exports = {
  createUser,
  getUserById,
  updateUser,
  removeUser,
  getAllUsers,
};
