const userDB = require("../../data-access/sql/user-db");

// Import user use cases
const createUser = require("./create-user")(userDB);
const getUserById = require("./get-user-by-id")(userDB);
const updateUser = require("./update-user")(userDB);
const deleteUser = require("./delete-user")(userDB);
const getAllUsers = require("./get-all-users")(userDB);

// Export all user use cases
module.exports = {
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  getAllUsers,
};
