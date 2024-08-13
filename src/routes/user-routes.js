const express = require("express");

const userRoutes = (userController) => {
  const router = express.Router();

  // Define routes
  router.post("/", userController.create);
  router.get("/:id", userController.getById);
  router.get("/", userController.getAll);
  router.put("/:id", userController.update);
  router.delete("/:id", userController.deleteUser);

  return router;
};

module.exports = userRoutes;
