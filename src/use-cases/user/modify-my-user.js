const { userDb } = require("../../data-access");
const CustomError = require("../../utils/customError");

const modifyMyUser = async (userId, userData) => {
  const user = await userDb.getById(userId);
  if (!user || !user.active) {
    throw new CustomError("Your account has been deactivated or deleted.", 403);
  }

  const allowedFields = ["username"];
  const filteredUpdateData = {};
  Object.keys(userData).forEach((key) => {
    if (allowedFields.includes(key)) {
      filteredUpdateData[key] = userData[key];
    }
  });

  const updated = await userDb.update(userId, filteredUpdateData);

  return updated;
};

module.exports = modifyMyUser;
