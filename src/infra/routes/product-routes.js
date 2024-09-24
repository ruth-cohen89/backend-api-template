const express = require("express");
const validate = require("@/middleware/validate");
const authMiddleware = require("../../middleware/authMiddleware");

const {
  validateCreateProduct,
  validateUpdateProduct,
  validateDeleteProduct,
  validateGetProduct,
} = require("@/validators");

const { productController } = require("../../controllers");

const router = express.Router();

router.get("/", productController.listProducts);
router.get(
  "/:id",
  validate(validateGetProduct),
  productController.fetchProductById
);

router.use(authMiddleware);

router.post("/", validate(validateCreateProduct), productController.addProduct);

router.patch(
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
