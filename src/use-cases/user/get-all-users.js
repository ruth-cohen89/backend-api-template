const { userDb } = require("../../data-access");

const getAllUsers = async () => {
  const users = await userDb.getAll();
  return users;
};

module.exports = getAllUsers;
