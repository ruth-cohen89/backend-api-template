const getAllUsers = (userDB) => {
  return async () => {
    // Fetch all users from the database
    const users = await userDB.getAllUsers();
    return users;
  };
};

module.exports = getAllUsers;
