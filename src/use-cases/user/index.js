const createUser = require("./create-user");
const getUserById = require("./get-user-by-id");
const updateUser = require("./update-user");
const removeUser = require("./remove-user");
const getAllUsers = require("./get-all-users");
const softDeleteUser = require("./soft-delete-user");
const updateMe = require("./update-me");

module.exports = {
  createUser,
  getUserById,
  updateUser,
  removeUser,
  getAllUsers,
  softDeleteUser,
  updateMe,
};
