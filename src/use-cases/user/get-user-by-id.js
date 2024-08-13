const getUserById = async (userRepository, userId) => {
  if (!userId) {
    throw new Error("User ID is required.");
  }
  const user = await userRepository.getUserById(userId);
  return user;
};

module.exports = getUserById;
