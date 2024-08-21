const express = require("express");
const validate = require("../middleware/validate");

const {
  validateCreateUser,
  validateUpdateUser,
  validateDeleteUser,
  validateGetUser,
} = require("@/validators");
const { userController } = require("../controllers");

const router = express.Router();

// User routes
router.post("/", validate(validateCreateUser), userController.registerUser);
router.get("/", userController.listUsers);
router.get("/:id", validate(validateGetUser), userController.fetchUserById);
router.put("/:id", validate(validateUpdateUser), userController.modifyUser);
router.delete("/:id", validate(validateDeleteUser), userController.deleteUser);

module.exports = router;
