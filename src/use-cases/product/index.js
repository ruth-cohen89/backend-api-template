const productDB = require("../../data-access/sql/product-db");

// Import product use cases
const createProduct = require("./create-product");
const getProductById = require("./get-product-by-id");
const updateProduct = require("./update-product");
const removeProduct = require("./remove-product");
const getAllProducts = require("./get-all-products");

// Export all product use cases
module.exports = {
  createProduct,
  getProductById,
  updateProduct,
  removeProduct,
  getAllProducts,
};
