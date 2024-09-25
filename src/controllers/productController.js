const catchAsync = require("@/utils/catchAsync");

const {
  addProduct,
  fetchProductById,
  modifyProduct,
  fetchAllProducts,
  hardDeleteProduct,
  softDeleteProduct,
} = require("../use-cases/product");

const productController = {
  createProduct: catchAsync(async (req, res) => {
    const productData = req.body;
    const newProduct = await addProduct(productData);
    res.status(201).json(newProduct);
  }),

  getProductById: catchAsync(async (req, res) => {
    const productId = req.params.id;
    const product = await fetchProductById(productId);
    res.status(200).json(product);
  }),

  updateProduct: catchAsync(async (req, res) => {
    const productId = req.params.id;
    const updatedData = req.body;
    const updatedProduct = await modifyProduct(productId, updatedData);
    res.status(200).json(updatedProduct);
  }),

  deleteProduct: catchAsync(async (req, res) => {
    const productId = req.params.id;
    await softDeleteProduct(productId);
    res.status(204).send();
  }),

  deleteProductForAdmin: catchAsync(async (req, res) => {
    const productId = req.params.id;

    const hardDelete = req.query.hardDelete === "true";
    if (hardDelete) await hardDeleteProduct(productId);
    else await softDeleteProduct(productId);

    res.status(204).send();
  }),

  getAllProducts: catchAsync(async (req, res) => {
    const products = await fetchAllProducts();
    res.status(200).json(products);
  }),

  getAllProductsForAdmin: async (req, res) => {
    const includeDeleted = req.query.includeDeleted === "true";
    const products = await fetchAllProducts(includeDeleted);
    return res.json(products);
  },
};

module.exports = productController;
