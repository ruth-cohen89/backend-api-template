const express = require("express");
const userRoutes = require("./user-routes");
const productRoutes = require("./product-routes");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Welcome to the API :)",
    routes: {
      users: "/api/users",
      products: "/api/products",
    },
  });
});

router.use("/api/users", userRoutes);
router.use("/api/products", productRoutes);

module.exports = router;
