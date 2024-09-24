const catchAsync = require("@/utils/catchAsync");

const {
  createProduct,
  getProductById,
  updateProduct,
  removeProduct,
  getAllProducts,
  hardDeleteProduct,
  softDeleteProduct,
} = require("../use-cases/product");

const productController = {
  addProduct: catchAsync(async (req, res) => {
    const productData = req.body;
    const newProduct = await createProduct(productData);
    res.status(201).json(newProduct);
  }),

  fetchProductById: catchAsync(async (req, res) => {
    const productId = req.params.id;
    const product = await getProductById(productId);
    res.status(200).json(product);
  }),

  modifyProduct: catchAsync(async (req, res) => {
    const productId = req.params.id;
    const updatedData = req.body;
    const updatedProduct = await updateProduct(productId, updatedData);
    res.status(200).json(updatedProduct);
  }),

  deleteProduct: catchAsync(async (req, res) => {
    const productId = req.params.id;

    const hardDelete = req.query.hardDelete === "true";
    if (hardDelete) await hardDeleteProduct(productId, hardDelete);
    else await softDeleteProduct(productId, hardDelete);

    res.status(204).send();
  }),

  listProducts: catchAsync(async (req, res) => {
    const products = await getAllProducts();
    res.status(200).json(products);
  }),
};

module.exports = productController;
