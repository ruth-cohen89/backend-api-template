const catchAsync = require("@/utils/catchAsync");

const {
  signUp,
  login,
  verifyEmail,
  updateMyPassword,
} = require("../use-cases/auth");

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

    const { accessToken, refreshToken } = await login({ username, password });
    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: (process.env.NODE_ENV = "production"),
      makAge: 15 * 60 * 1000,
      sameSite: "Strict",
    });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: (process.env.NODE_ENV = "production"),
      makAge: 15 * 60 * 1000,
      sameSite: "Strict",
    });
    // Return tokens to the client
    //return { accessToken, refreshToken };
    res.status(200).json("Login successful");
  }),

  updateMyPassword: catchAsync(async (req, res) => {
    const { oldPassword, newPassword } = req.body;
    const updatedUser = await updateMyPassword(
      req.user.id,
      req.user.password,
      oldPassword,
      newPassword
    );
    res.status(200).json(updatedUser);
  }),
};

module.exports = authController;
