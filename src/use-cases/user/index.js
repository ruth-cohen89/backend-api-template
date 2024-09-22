const createUser = require("./create-user");
const fetchUserById = require("./fetch-user-by-id");
const modifyUser = require("./modify-user");
const removeUser = require("./hard-delete-user");
const fetchAllUsers = require("./fetch-all-users");
const softDeleteUser = require("./soft-delete-user");
const modifyMyUser = require("./modify-my-user");
const fetchMyUser = require("./fetch-my-user");
const hardDeleteUser = require("./hard-delete-user");

module.exports = {
  createUser,
  fetchUserById,
  modifyUser,
  removeUser,
  fetchAllUsers,
  softDeleteUser,
  modifyMyUser,
  fetchMyUser,
  hardDeleteUser,
};
