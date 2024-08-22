const catchAsync = require("@/utils/catchAsync");

const {
  createUser,
  getUserById,
  updateUser,
  removeUser,
  getAllUsers,
} = require("../use-cases/user");

const userController = {
  registerUser: catchAsync(async (req, res) => {
    const userData = req.body;
    const newUser = await createUser(userData);
    res.status(201).json(newUser);
  }),

  // Controller function to get a user by ID
  fetchUserById: catchAsync(async (req, res) => {
    const userId = req.params.id;
    const user = await getUserById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  }),

  // Controller function to update a user
  modifyUser: catchAsync(async (req, res) => {
    const userId = req.params.id;
    const updatedData = req.body;
    const updatedUser = await updateUser(userId, updatedData);
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(updatedUser);
  }),

  // Controller function to delete a user
  deleteUser: catchAsync(async (req, res) => {
    const userId = req.params.id;
    const deletedUser = await removeUser(userId);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(204).send(); // No content to send back
  }),

  // Controller function to get all users
  listUsers: catchAsync(async (req, res) => {
    const users = await getAllUsers();
    res.status(200).json(users);
  }),
};

// Export the user controller object
module.exports = userController;
