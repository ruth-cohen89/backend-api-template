const userDB = require("../../data-access/sql/user-db");

const getAllUsers = () => {
  return async () => {
    // Fetch all users from the database
    const users = await userDB.getAllUsers();
    return users;
  };
};

module.exports = getAllUsers;
