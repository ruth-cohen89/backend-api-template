const { userDb } = require("../../data-access");

// TODO: Adjust for Admin usage only
const createUser = async (userData) => {
  console.log(userData.role);
  const userId = await userDb.create(userData);
  return userId;
};

module.exports = createUser;
