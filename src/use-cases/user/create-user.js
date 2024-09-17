const { userDb } = require("../../data-access");
const { hashPassword } = require("../../utils/passwordUtils");

const createUser = async (userData) => {
  const { password, ...otherUserInfo } = userData;
  const hashedPassword = await hashPassword(password);

  const newUser = {
    ...otherUserInfo,
    password: hashedPassword,
    emailVerified: true,
  };

  const savedUser = await userDb.create(newUser);
  return savedUser;
};

module.exports = createUser;
