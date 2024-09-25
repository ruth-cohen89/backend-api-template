const { userDb } = require("../../data-access");

const fetchAllUsers = async (includeInactive) => {
  const filter = includeInactive ? {} : { active: true };

  const users = await userDb.getAll(filter);
  return users;
};

module.exports = fetchAllUsers;
