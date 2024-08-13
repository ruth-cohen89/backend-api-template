const {
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  getAllUsers,
} = require("../use-cases/user");

// Create a new user
const createUserController = async (req, res) => {
  try {
    const userData = req.body; // Assume user data is in the request body
    const userId = await createUser(userData);
    res.status(201).json({ message: "User created successfully", userId });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get a user by ID
const getUserByIdController = async (req, res) => {
  try {
    const userId = req.params.id; // Assume the user ID is in the route parameters
    const user = await getUserById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a user
const updateUserController = async (req, res) => {
  try {
    const userId = req.params.id;
    const userData = req.body; // Updated user data
    await updateUser(userId, userData);
    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a user
const deleteUserController = async (req, res) => {
  try {
    const userId = req.params.id;
    await deleteUser(userId);
    res.status(204).json(); // No content to send back
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all users
const getAllUsersController = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Export all controller functions
module.exports = {
  createUserController,
  getUserByIdController,
  updateUserController,
  deleteUserController,
  getAllUsersController,
};
