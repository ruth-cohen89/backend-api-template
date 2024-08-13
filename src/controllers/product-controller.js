const {
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
  getAllProducts,
} = require("../use-cases/product-use-cases");

// Create a new product
const createProductController = async (req, res) => {
  try {
    const productData = req.body; // Assume product data is in the request body
    const productId = await createProduct(productData);
    res
      .status(201)
      .json({ message: "Product created successfully", productId });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get a product by ID
const getProductByIdController = async (req, res) => {
  try {
    const productId = req.params.id; // Assume the product ID is in the route parameters
    const product = await getProductById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all products
const getAllProductsController = async (req, res) => {
  try {
    const products = await getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a product
const updateProductController = async (req, res) => {
  try {
    const productId = req.params.id;
    const productData = req.body; // Updated product data
    await updateProduct(productId, productData);
    res.status(200).json({ message: "Product updated successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a product
const deleteProductController = async (req, res) => {
  try {
    const productId = req.params.id;
    await deleteProduct(productId);
    res.status(204).json(); // No content to send back
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Export all controller functions
module.exports = {
  createProductController,
  getProductByIdController,
  getAllProductsController,
  updateProductController,
  deleteProductController,
};
