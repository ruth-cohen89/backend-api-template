const catchAsync = require("@/utils/catchAsync");

const { signUp, login, verifyEmail } = require("../use-cases/auth");

const authController = {
  signUpUser: catchAsync(async (req, res) => {
    const userData = req.body;
    const newUser = await signUp(userData);
    res.status(201).json(newUser);
  }),

  verifyUserEmail: catchAsync(async (req, res) => {
    const verifyToken = req.params.token;
    const updatedUser = await verifyEmail(verifyToken);
    res.status(201).json(updatedUser);
  }),

  loginUser: catchAsync(async (req, res) => {
    const { username, password } = req.body;
    await login({ username, password });
    // TODO: return token
    res.status(200).json("Login successful");
  }),
};

module.exports = authController;
