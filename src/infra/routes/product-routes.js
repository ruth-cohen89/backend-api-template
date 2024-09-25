const express = require("express");
const validate = require("@/middleware/validate");
const authMiddleware = require("../../middleware/authMiddleware");
const restrictTo = require("../../middleware/restrictTo");

const {
  validateCreateProduct,
  validateUpdateProduct,
  validateDeleteProduct,
  validateGetProduct,
} = require("@/validators");

const { productController } = require("../../controllers");

const router = express.Router();

router.get("/", productController.getAllProducts);
router.get(
  "/admin",
  authMiddleware,
  restrictTo("admin", "Access denied. Admins only."),
  productController.getAllProductsForAdmin
);

router.get(
  "/:id",
  validate(validateGetProduct),
  productController.getProductById
);

router.use(authMiddleware);

router.post(
  "/",
  validate(validateCreateProduct),
  productController.createProduct
);

router.patch(
  "/:id",
  validate(validateUpdateProduct),
  productController.updateProduct
);

router.delete(
  "/:id",
  validate(validateDeleteProduct),
  productController.deleteProduct
);

module.exports = router;
