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
} = require("@/validators");
const { userController, authController } = require("../../controllers");

const router = express.Router();

router.post(
  "/sign-up/",
  validate(validateSignupUser),
  authController.signUpUser
);

router.post("/login/", validate(validateLoginUser), authController.loginUser);
router.post(
  "/",
  validate(validateCreateUser),
  authMiddleware,
  restrictTo("admin"),
  userController.registerUser
);

router.get("/", userController.listUsers);
router.get("/verify-email/:token", authController.verifyUserEmail);

router.get(
  "/:id",
  validate(validateGetUser),
  authMiddleware,
  userController.fetchUserById
);

router.put(
  "/:id",
  validate(validateUpdateUser),
  authMiddleware,
  userController.modifyUser
);
router.delete(
  "/:id",
  validate(validateDeleteUser),
  authMiddleware,
  restrictTo("admin"),
  userController.deleteUser
);

module.exports = router;
