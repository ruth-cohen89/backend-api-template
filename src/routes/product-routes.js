const express = require("express");
const validate = require("@/middleware/validate");

const { productController } = require("../controllers");

const router = express.Router();

// Product routes
router.post("/products", productController.addProduct);
router.get("/products", productController.listProducts);
router.get("/products/:id", productController.fetchProductById);
router.put("/products/:id", productController.modifyProduct);
router.delete("/products/:id", productController.deleteProduct);

module.exports = router;
