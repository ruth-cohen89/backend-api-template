const catchAsync = require("@/utils/catchAsync");

const {
  createUser,
  getUserById,
  updateUser,
  removeUser,
  getAllUsers,
  softDeleteUser,
  updateMe,
} = require("../use-cases/user");

const userController = {
  registerUser: catchAsync(async (req, res) => {
    const userData = req.body;
    const newUser = await createUser(userData);
    res.status(201).json(newUser);
  }),

  listUsers: catchAsync(async (req, res) => {
    const users = await getAllUsers();
    res.status(200).json(users);
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

  updateMe: catchAsync(async (req, res) => {
    const updatedUser = await updateMe(req.user.id, req.body);
    res.status(200).json(updatedUser);
  }),

  deleteMe: catchAsync(async (req, res) => {
    const userId = req.user.id;
    await softDeleteUser(userId);
    res.status(204).send();
  }),
};

module.exports = userController;
