const productDB = require("../../data-access/sql/product-db");

// Import product use cases
const createProduct = require("./create-product")(productDB);
const getProductById = require("./get-product-by-id")(productDB);
const updateProduct = require("./update-product")(productDB);
const removeProduct = require("./remove-product")(productDB);
const getAllProducts = require("./get-all-products")(productDB);

// Export all product use cases
module.exports = {
  createProduct,
  getProductById,
  updateProduct,
  removeProduct,
  getAllProducts,
};
