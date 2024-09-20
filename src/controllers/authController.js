const catchAsync = require("@/utils/catchAsync");

const {
  signUp,
  login,
  verifyEmail,
  changeMyPassword,
  refreshUserTokens,
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

    // return { accessToken, refreshToken };
    res.status(200).json("Login successful");
  }),

  updateMyPassword: catchAsync(async (req, res) => {
    const { oldPassword, newPassword } = req.body;
    const updatedUser = await changeMyPassword(
      req.user.id,
      req.user.password,
      oldPassword,
      newPassword
    );
    res.status(200).json(updatedUser);
  }),

  refreshToken: catchAsync(async (req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
      return res
        .status(400)
        .json({ message: "Refresh token cookie is missing." });
    }

    const { newAccessToken, newRefreshToken } = await refreshUserTokens(
      refreshToken
    );

    res.cookie("accessToken", newAccessToken, {
      httpOnly: true,
      secure: (process.env.NODE_ENV = "production"),
      makAge: 15 * 60 * 1000,
      sameSite: "Strict",
    });

    res.cookie("refreshToken", newRefreshToken, {
      httpOnly: true,
      secure: (process.env.NODE_ENV = "production"),
      makAge: 15 * 60 * 1000,
      sameSite: "Strict",
    });

    res.status(200).json("New access and refresh tokens.");
  }),
};

module.exports = authController;
