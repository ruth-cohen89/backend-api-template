const express = require("express");

const productRoutes = (productController) => {
  const router = express.Router();

  // Define routes
  router.post("/", productController.create);
  router.get("/:id", productController.getById);
  router.get("/", productController.getAll);
  router.put("/:id", productController.update);
  router.delete("/:id", productController.deleteProduct);

  return router;
};

module.exports = productRoutes;
