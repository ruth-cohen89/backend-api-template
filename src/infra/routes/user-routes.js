const express = require("express");
const validate = require("../../middleware/validate");

const {
  validateCreateUser,
  validateUpdateUser,
  validateDeleteUser,
  validateGetUser,
  validateLoginUser,
} = require("@/validators");
const { userController, authController } = require("../../controllers");

const router = express.Router();

router.post(
  "/sign-up/",
  validate(validateCreateUser),
  authController.signUpUser
);
router.post("/login/", validate(validateLoginUser), authController.loginUser);

// TODO: Restrict this request only to admin
router.post("/", validate(validateCreateUser), userController.registerUser);
router.get("/", userController.listUsers);

// TODO: Create verification and handling of this endpoint.
router.get("/verify-email/:token", authController.verifyUserEmail);

router.get("/:id", validate(validateGetUser), userController.fetchUserById);
router.put("/:id", validate(validateUpdateUser), userController.modifyUser);
router.delete("/:id", validate(validateDeleteUser), userController.deleteUser);

module.exports = router;
