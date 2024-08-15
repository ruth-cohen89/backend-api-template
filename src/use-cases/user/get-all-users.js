const { userDb } = require("../../data-access");

const getAllUsers = () => {
  return async () => {
    // Fetch all users from the database
    const users = await userDb.getAllUsers();
    return users;
  };
};

module.exports = getAllUsers;
