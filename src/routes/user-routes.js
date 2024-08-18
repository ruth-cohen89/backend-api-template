const express = require("express");
const validate = require("@/middleware/validate");
const {
  validateCreateUser,
  validateUpdateUser,
  validateDeleteUser,
  validateGetUser,
} = require("@/validators");
const { userController } = require("../controllers");

const router = express.Router();

// User routes
router.post(
  "/users",
  validate(validateCreateUser),
  userController.registerUser
);
router.get("/users", userController.listUsers);
router.get(
  "/users/:id",
  validate(validateGetUser),
  userController.fetchUserById
);
router.put(
  "/users/:id",
  validate(validateUpdateUser),
  userController.modifyUser
);
router.delete(
  "/users/:id",
  validate(validateDeleteUser),
  userController.deleteUser
);

module.exports = router;
