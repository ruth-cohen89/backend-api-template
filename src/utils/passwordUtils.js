const bcrypt = require("bcrypt");
const saltRounds = 10;

const hashPassword = async (password) => {
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
};

correctPassword = async (candidatePassword, userPassword) => {
  return await bcrypt.compare(candidatePassword, userPassword);
};

module.exports = {
  hashPassword,
  correctPassword,
};
