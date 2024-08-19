// controllers/userController.js

const {
  createUser,
  getUserById,
  updateUser,
  removeUser,
  getAllUsers,
} = require("../use-cases/user");

const userController = {
  // Controller function to create a user
  registerUser: async (req, res) => {
    try {
      const userData = req.body;
      const newUser = await createUser(userData);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ message: "Failed to create user", error });
    }
  },

  // Controller function to get a user by ID
  fetchUserById: async (req, res) => {
    try {
      const userId = req.params.id;
      const user = await getUserById(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: "Failed to retrieve user", error });
    }
  },

  // Controller function to update a user
  modifyUser: async (req, res) => {
    try {
      const userId = req.params.id;
      const updatedData = req.body;
      const updatedUser = await updateUser(userId, updatedData);
      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json({ message: "Failed to update user", error });
    }
  },

  // Controller function to delete a user
  deleteUser: async (req, res) => {
    try {
      const userId = req.params.id;
      const deletedUser = await removeUser(userId);
      if (!deletedUser) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(204).send(); // No content to send back
    } catch (error) {
      res.status(500).json({ message: "Failed to delete user", error });
    }
  },

  // Controller function to get all users
  listUsers: async (req, res) => {
    try {
      const users = await getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: "Failed to retrieve users", error });
    }
  },
};

// Export the user controller object
module.exports = userController;
