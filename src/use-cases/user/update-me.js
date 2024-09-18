const { userDb } = require("../../data-access");
const CustomError = require("../../utils/customError");

const updateMe = async (userId, userData) => {
  const allowedFields = ["username"];

  const filteredUpdateData = {};
  Object.keys(userData).forEach((key) => {
    if (allowedFields.includes(key)) {
      filteredUpdateData[key] = userData[key];
    }
  });

  const updated = await userDb.update(userId, filteredUpdateData);

  if (!updated) {
    throw new CustomError("User not found.", 404);
  }
  return updated;
};

module.exports = updateMe;
