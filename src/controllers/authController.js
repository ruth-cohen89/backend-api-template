const catchAsync = require("@/utils/catchAsync");

const { signUp, login } = require("../use-cases/auth");

const authController = {
  signUpUser: catchAsync(async (req, res) => {
    const userData = req.body;
    console.log("signup controller");
    const newUser = await signUp(userData);
    res.status(201).json(newUser);
  }),

  loginUser: catchAsync(async (req, res) => {
    // const userId = req.params.id;
    // const user = await getUserById(userId);
    // res.status(200).json(user);
  }),
};

module.exports = authController;
