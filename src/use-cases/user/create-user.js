const { userDb } = require("../../data-access");

const createUser = async (userData) => {
  const userId = await userDb.create(userData);
  return userId;
};

module.exports = createUser;
