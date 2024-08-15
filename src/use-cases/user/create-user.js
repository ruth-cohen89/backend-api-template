const { userDb } = require("../../data-access");

const createUser = async (userData) => {
  if (!userData.name || !userData.email) {
    throw new Error("Name and email are required.");
  }
  const userId = await userDb.createUser(userData);
  return userId;
};

module.exports = createUser;
