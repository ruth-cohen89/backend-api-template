// routes/users-routes.js
const express = require("express");
const { userController } = require("../controllers");

const router = express.Router();

// User routes
router.post("/users", userController.registerUser);
router.get("/users", userController.listUsers);
router.get("/users/:id", userController.fetchUserById);
router.put("/users/:id", userController.modifyUser);
router.delete("/users/:id", userController.deleteUser);

module.exports = router;
