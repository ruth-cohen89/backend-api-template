const express = require("express");
const validate = require("@/middleware/validate");

const {
  validateCreateProduct,
  validateUpdateProduct,
  validateDeleteProduct,
  validateGetProduct,
} = require("@/validators");

const { productController } = require("../controllers");

const router = express.Router();

router.post(
  "/products",
  validate(validateCreateProduct),
  productController.addProduct
);
router.get("/products", productController.listProducts);
router.get(
  "/products/:id",
  validate(validateGetProduct),
  productController.fetchProductById
);
router.put(
  "/products/:id",
  validate(validateUpdateProduct),
  productController.modifyProduct
);
router.delete(
  "/products/:id",
  validate(validateDeleteProduct),
  productController.deleteProduct
);

module.exports = router;
