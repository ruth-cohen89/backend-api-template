const express = require("express");
const validate = require("../../middleware/validate");
const authMiddleware = require("../../middleware/authMiddleware");
const restrictTo = require("../../middleware/restrictTo");
const {
  validateCreateUser,
  validateSignupUser,
  validateLoginUser,
  validateUpdateUser,
  validateDeleteUser,
  validateGetUser,
  validateUpdateMe,
  validateUpdateMyPassword,
} = require("@/validators");
const { userController, authController } = require("../../controllers");

const router = express.Router();

router.post(
  "/sign-up/",
  validate(validateSignupUser),
  authController.signUpUser
);

router.get("/verify-email/:token", authController.verifyUserEmail);
router.post("/login/", validate(validateLoginUser), authController.loginUser);

// auth
router.use(authMiddleware);

router.delete("/me/", userController.deleteMe);
router.patch("/me/", validate(validateUpdateMe), userController.updateMe);
router.patch(
  "/me/password",
  validate(validateUpdateMyPassword),
  authController.updateMyPassword
);

//router.patch("/update-my-password/", userController.deleteMe);

router.get("/", userController.listUsers);

router.post(
  "/",
  validate(validateCreateUser),
  //authMiddleware,
  restrictTo(
    "admin",
    "Only admins can use this route. Use the sign-up endpoint instead."
  ),
  userController.registerUser
);

router.get(
  "/:id",
  validate(validateGetUser),
  //authMiddleware,
  userController.fetchUserById
);

router.patch(
  "/:id",
  validate(validateUpdateUser),
  //authMiddleware,
  userController.modifyUser
);

router.delete(
  "/:id",
  validate(validateDeleteUser),
  //authMiddleware,
  restrictTo(
    "admin",
    "Only admins can use this route. Use the delete-me endpoint instead."
  ),
  userController.deleteUser
);

module.exports = router;
