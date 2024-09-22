const createProduct = require("./create-product");
const getProductById = require("./get-product-by-id");
const updateProduct = require("./update-product");
const hardDeleteProduct = require("./hard-delete-product");
const getAllProducts = require("./get-all-products");
const softDeleteProduct = require("./soft-delete-product");

module.exports = {
  createProduct,
  getProductById,
  updateProduct,
  hardDeleteProduct,
  getAllProducts,
  softDeleteProduct,
};
