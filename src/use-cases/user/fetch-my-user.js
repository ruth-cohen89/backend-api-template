const { userDb } = require("../../data-access");
const CustomError = require("../../utils/customError");

const fetchMyUser = async (userId) => {
  const user = await userDb.getById(userId);

  if (!user || !user.active) {
    throw new CustomError("Your account has been deactivated or deleted.", 404);
  }

  return user;
};

module.exports = fetchMyUser;
