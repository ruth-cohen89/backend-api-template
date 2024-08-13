// use-cases/user/update-user.js
const updateUser = async (userRepository, userId, userData) => {
  if (!userId) {
    throw new Error("User ID is required.");
  }
  const updated = await userRepository.updateUser(userId, userData);
  if (!updated) {
    throw new Error("User not found or not updated.");
  }
  return updated;
};

module.exports = updateUser;
