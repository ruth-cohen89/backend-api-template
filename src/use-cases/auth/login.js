const { userDb } = require("../../data-access");
const CustomError = require("@/utils/customError");
const { correctPassword } = require("@/utils/passwordUtils");

const login = async (userData) => {
  const { username, password } = userData;
  const user = await userDb.findOne({ username });

  if (!user) {
    throw new CustomError("Invalid username or password", 401);
  }

  const isMatch = await correctPassword(password, user.password);

  if (!isMatch) {
    return res.status(401).json({ message: "Invalid username or password" });
  }
  // todo: jwt
};

module.exports = login;
