const { userDb } = require("../../data-access");
const { hashToken } = require("@/utils/tokenUtils");
const CustomError = require("@/utils/customError");

const verifyEmail = async (token) => {
  const hashedToken = hashToken(token);

  const user = await userDb.findOne({
    verificationToken: hashedToken,
    verificationTokenExpires: { $gt: Date.now() },
  });
  if (!user) {
    throw new CustomError("Token is invalid or has expired", 400);
  }

  const updateFields = {
    emailVerified: true,
    $unset: {
      verificationToken: "",
      verificationTokenExpires: "",
    },
  };
  const updated = await userDb.update(user._id, updateFields);
  return updated;
};

module.exports = verifyEmail;
