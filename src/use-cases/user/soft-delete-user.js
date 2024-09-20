const { userDb } = require("../../data-access");
const CustomError = require("../../utils/customError");

const softDeleteUser = async (userId) => {
  const user = await userDb.getById(userId);
  if (!user) throw new CustomError("User not found.", 404);

  if (!user.active) {
    throw new CustomError(
      "Your account has already been deactivated/deleted.",
      400
    );
  }

  const updated = await userDb.update(userId, { active: false });

  return updated;
};

module.exports = softDeleteUser;
