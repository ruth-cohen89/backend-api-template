const catchAsync = require("@/utils/catchAsync");

const {
  createUser,
  fetchUserById,
  modifyUser,
  fetchAllUsers,
  softDeleteUser,
  hardDeleteUser,
  modifyMyUser,
  fetchMyUser,
} = require("../use-cases/user");

const userController = {
  registerUser: catchAsync(async (req, res) => {
    const userData = req.body;
    const newUser = await createUser(userData);
    res.status(201).json(newUser);
  }),

  getAllUsers: catchAsync(async (req, res) => {
    const includeInactive = req.query.includeInactive === "true";

    const users = await fetchAllUsers(includeInactive);
    res.status(200).json(users);
  }),

  getUserById: catchAsync(async (req, res) => {
    const userId = req.params.id;
    const user = await fetchUserById(userId);
    res.status(200).json(user);
  }),

  getMyUser: catchAsync(async (req, res) => {
    const userId = req.user.id;
    const user = await fetchMyUser(userId);
    res.status(200).json(user);
  }),

  updateUser: catchAsync(async (req, res) => {
    const userId = req.params.id;
    const updatedData = req.body;

    const updatedUser = await modifyUser(userId, updatedData);
    res.status(200).json(updatedUser);
  }),

  deleteUser: catchAsync(async (req, res) => {
    const userId = req.params.id;
    const hardDelete = req.query.hardDelete === "true";

    if (hardDelete) await hardDeleteUser(userId);
    else await softDeleteUser(userId);

    res.status(204).send();
  }),

  updateMe: catchAsync(async (req, res) => {
    const updatedUser = await modifyMyUser(req.user.id, req.body);
    res.status(200).json(updatedUser);
  }),

  deleteMe: catchAsync(async (req, res) => {
    const userId = req.user.id;
    await softDeleteUser(userId);
    res.status(204).send();
  }),
};

module.exports = userController;
