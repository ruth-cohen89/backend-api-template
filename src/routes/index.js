// routes/index.js
const userRoutes = require("./user");
const productRoutes = require("./product");
const { userController, productController } = require("../controllers");
const express = require("express");

const router = express.Router();

// Initialize routes
router.use("/users", userRoutes(userController()));
router.use("/products", productRoutes(productController()));

module.exports = router;
