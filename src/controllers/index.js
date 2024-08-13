// Import use cases
const userUseCases = require("../use-cases/user");
const productUseCases = require("../use-cases/product");

// Import and pass use cases to controllers
const userController = require("./user-controller")(userUseCases);
const productController = require("./product-controller")(productUseCases);

// Export controllers
module.exports = {
  userController,
  productController,
};
