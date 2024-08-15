// routes/index.js
const express = require("express");
const userRoutes = require("./user-routes");
const productRoutes = require("./product-routes");

const router = express.Router();

// Welcome route
router.get("/", (req, res) => {
  res.json({
    message: "Welcome to the API :)",
    routes: {
      users: "/api/users",
      products: "/api/products",
    },
  });
});

// Use the user and product routes
router.use("/api", userRoutes);
router.use("/api", productRoutes);

module.exports = router;
