const catchAsync = require("@/utils/catchAsync");
const { verifyAccessToken } = require("@/utils/jwtUtils");
const { fetchUserById } = require("../use-cases/user");

const authMiddleware = catchAsync(async (req, res, next) => {
  if (!req.cookies.accessToken) {
    return res
      .status(401)
      .json({ message: "Access token required. Please login" });
  }

  const accessToken = req.cookies.accessToken;

  if (typeof accessToken !== "string") {
    throw new Error("Access token must be a string");
  }

  if (!accessToken) {
    return res.status(401).json({ message: "Access token required" });
  }

  const decoded = await verifyAccessToken(accessToken);
  const currentUser = await fetchUserById(
    decoded.userId,
    "The user belonging to this token no longer exists.",
    401
  );
  req.user = currentUser;
  next();
});

module.exports = authMiddleware;
