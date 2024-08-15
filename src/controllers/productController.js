// controllers/productController.js

const {
  createProduct,
  getProductById,
  updateProduct,
  removeProduct,
  getAllProducts,
} = require("../use-cases/product");

const productController = {
  // Controller function to create a product
  addProduct: async (req, res) => {
    try {
      const productData = req.body;
      const newProduct = await createProduct(productData);
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).json({ message: "Failed to create product", error });
    }
  },

  // Controller function to get a product by ID
  fetchProductById: async (req, res) => {
    try {
      const productId = req.params.id;
      const product = await getProductById(productId);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ message: "Failed to retrieve product", error });
    }
  },

  // Controller function to update a product
  modifyProduct: async (req, res) => {
    try {
      const productId = req.params.id;
      const updatedData = req.body;
      const updatedProduct = await updateProduct(productId, updatedData);
      if (!updatedProduct) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.status(200).json(updatedProduct);
    } catch (error) {
      res.status(500).json({ message: "Failed to update product", error });
    }
  },

  // Controller function to delete a product
  deleteProduct: async (req, res) => {
    try {
      const productId = req.params.id;
      const deletedProduct = await removeProduct(productId);
      if (!deletedProduct) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.status(204).send(); // No content to send back
    } catch (error) {
      res.status(500).json({ message: "Failed to delete product", error });
    }
  },

  // Controller function to get all products
  listProducts: async (req, res) => {
    try {
      const products = await getAllProducts();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: "Failed to retrieve products", error });
    }
  },
};

// Export the product controller object
module.exports = productController;
