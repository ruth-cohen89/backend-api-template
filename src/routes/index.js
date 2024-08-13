const userRoutes = require("./user-routes");
const productRoutes = require("./product-routes");
const { userController, productController } = require("../controllers");
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json("Welcome to the API :)");
  // Return JSON of possible routes (api/user, api/product...)
});

router.use("/users", userRoutes(userController));
router.use("/products", productRoutes(productController));

module.exports = router;
