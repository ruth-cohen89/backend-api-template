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
router.post("/refresh-token/", authController.refreshToken);

router.use(authMiddleware);

// me
router.get("/me/", userController.getMyUser);
router.delete("/me/", userController.deleteMe);
router.patch("/me/", validate(validateUpdateMe), userController.updateMe);
router.patch(
  "/me/password",
  validate(validateUpdateMyPassword),
  authController.updateMyPassword
);

// admin
router.get("/", restrictTo("admin"), userController.getAllUsers);

router.post(
  "/",
  validate(validateCreateUser),
  restrictTo(
    "admin",
    "Only admins can use this endpoint. Use the 'POST sign-up' endpoint instead."
  ),
  userController.registerUser
);

router.get(
  "/:id",
  validate(validateGetUser),
  restrictTo(
    "admin",
    "Only admins can use this endpoint. Use the 'GET me' endpoint instead."
  ),
  userController.getUserById
);

router.patch(
  "/:id",
  restrictTo(
    "admin",
    "Only admins can use this endpoint. Use the 'UPDATE me' endpoint instead."
  ),
  validate(validateUpdateUser),
  userController.updateUser
);

router.delete(
  "/:id",
  validate(validateDeleteUser),
  restrictTo(
    "admin",
    "Only admins can use this endpoint. Use the 'DELETE me' endpoint instead."
  ),
  userController.deleteUser
);

module.exports = router;
