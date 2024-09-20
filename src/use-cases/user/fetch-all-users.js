const { userDb } = require("../../data-access");

const fetchAllUsers = async () => {
  const users = await userDb.getAll();
  return users;
};

module.exports = fetchAllUsers;
