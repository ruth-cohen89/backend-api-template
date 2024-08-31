const catchAsync = require("@/utils/catchAsync");

const { signUp, login, verifyUserEmail } = require("../use-cases/auth");

const authController = {
  signUpUser: catchAsync(async (req, res) => {
    const userData = req.body;
    const newUser = await signUp(userData);
    res.status(201).json(newUser);
  }),

  verifyEmail: catchAsync(async (req, res) => {
    const verifyToken = req.params.token;
    const updatedUser = await verifyUserEmail(verifyToken);
    res.status(201).json(updatedUser);
  }),

  loginUser: catchAsync(async (req, res) => {
    // const userId = req.params.id;
    // const user = await getUserById(userId);
    // res.status(200).json(user);
  }),
};

module.exports = authController;
