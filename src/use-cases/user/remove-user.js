// use-cases/user/delete-user.js
const removeUser = async (userRepository, userId) => {
  if (!userId) {
    throw new Error("User ID is required.");
  }
  const deleted = await userRepository.deleteUser(userId);
  if (!deleted) {
    throw new Error("User not found or not deleted.");
  }
  return deleted;
};

module.exports = deleteUser;
