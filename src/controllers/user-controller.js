const userController = (userUseCases) => {
  const { createUser, getUserById, updateUser, removeUser, getAllUsers } =
    userUseCases;

  // Create a new user
  const create = async (req, res) => {
    try {
      const userData = req.body; // Assume user data is in the request body
      const userId = await createUser(userData);
      res.status(201).json({ message: "User created successfully", userId });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  // Get a user by ID
  const getById = async (req, res) => {
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

  // Get all users
  const getAll = async (req, res) => {
    try {
      const users = await getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  // Update a user
  const update = async (req, res) => {
    try {
      const userId = req.params.id;
      const userData = req.body; // Updated user data
      await updateUser(userId, userData);
      res.status(200).json({ message: "User updated successfully" });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  // remove a user
  const deleteUser = async (req, res) => {
    try {
      const userId = req.params.id;
      await removeUser(userId);
      res.status(204).json(); // No content to send back
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  return {
    create,
    getById,
    getAll,
    update,
    deleteUser,
  };
};

module.exports = userController;
