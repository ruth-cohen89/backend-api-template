const userDB = require("../../data-access/sql/user-db");

const createUser = async (userData) => {
  if (!userData.name || !userData.email) {
    throw new Error("Name and email are required.");
  }
  const userId = await userDB.createUser(userData);
  return userId;
};

module.exports = createUser;
