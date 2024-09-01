const { userDb } = require("../../data-access");
const CustomError = require("@/utils/customError");
const { correctPassword } = require("@/utils/passwordUtils");

const login = async (userData) => {
  const { username, password } = userData;
  const user = await userDb.findOne({ username });

  if (!user || !(await correctPassword(password, user.password))) {
    throw new CustomError("Invalid username or password", 401);
  }
  // todo: jwt
};

module.exports = login;
