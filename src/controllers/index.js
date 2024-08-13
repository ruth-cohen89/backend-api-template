// Import use cases
const userUseCases = require("../use-cases/user");
const productUseCases = require("../use-cases/product");

// Import and pass use cases to controllers
const userController = require("./user")(userUseCases);
const productController = require("./product")(productUseCases);

// Export controllers
module.exports = {
  userController,
  productController,
};
