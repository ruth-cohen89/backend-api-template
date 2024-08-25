const express = require("express");
const validate = require("../../middleware/validate");

const {
  validateCreateUser,
  validateUpdateUser,
  validateDeleteUser,
  validateGetUser,
} = require("@/validators");
const { userController, authController } = require("../../controllers");

const router = express.Router();

router.post(
  "/sign-up/",
  validate(validateCreateUser),
  authController.signUpUser
);

// TODO: Allow register only for admin
router.post("/", validate(validateCreateUser), userController.registerUser);
router.get("/", userController.listUsers);
router.get("/:id", validate(validateGetUser), userController.fetchUserById);
router.put("/:id", validate(validateUpdateUser), userController.modifyUser);
router.delete("/:id", validate(validateDeleteUser), userController.deleteUser);

module.exports = router;
