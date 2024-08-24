const express = require("express");
const validate = require("@/middleware/validate");

const {
  validateCreateProduct,
  validateUpdateProduct,
  validateDeleteProduct,
  validateGetProduct,
} = require("@/validators");

const { productController } = require("../../controllers");

const router = express.Router();

router.post("/", validate(validateCreateProduct), productController.addProduct);
router.get("/", productController.listProducts);
router.get(
  "/:id",
  validate(validateGetProduct),
  productController.fetchProductById
);
router.put(
  "/:id",
  validate(validateUpdateProduct),
  productController.modifyProduct
);
router.delete(
  "/:id",
  validate(validateDeleteProduct),
  productController.deleteProduct
);

module.exports = router;
