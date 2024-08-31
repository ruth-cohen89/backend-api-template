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

  fetchUserById: catchAsync(async (req, res) => {
    const userId = req.params.id;
    const user = await getUserById(userId);
    res.status(200).json(user);
  }),

  modifyUser: catchAsync(async (req, res) => {
    const userId = req.params.id;
    const updatedData = req.body;
    const updatedUser = await updateUser(userId, updatedData);
    res.status(200).json(updatedUser);
  }),

  deleteUser: catchAsync(async (req, res) => {
    const userId = req.params.id;
    await removeUser(userId);
    res.status(204).send();
  }),

  listUsers: catchAsync(async (req, res) => {
    const users = await getAllUsers();
    res.status(200).json(users);
  }),
};

module.exports = userController;
