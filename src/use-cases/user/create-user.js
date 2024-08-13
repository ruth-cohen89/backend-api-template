const createUser = async (userRepository, userData) => {
  if (!userData.name || !userData.email) {
    throw new Error("Name and email are required.");
  }
  const userId = await userRepository.createUser(userData);
  return userId;
};

module.exports = createUser;
