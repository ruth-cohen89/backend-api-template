const addProduct = require("./add-product");
const fetchProductById = require("./fetch-product-by-id");
const modifyProduct = require("./modify-product");
const hardDeleteProduct = require("./hard-delete-product");
const fetchAllProducts = require("./fetch-all-products");
const softDeleteProduct = require("./soft-delete-product");

module.exports = {
  addProduct,
  fetchProductById,
  modifyProduct,
  hardDeleteProduct,
  fetchAllProducts,
  softDeleteProduct,
};
