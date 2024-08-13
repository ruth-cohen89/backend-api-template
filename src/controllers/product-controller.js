const productController = (productUseCases) => {
  const {
    createProduct,
    getProductById,
    updateProduct,
    removeProduct,
    getAllProducts,
  } = productUseCases;

  // Create a new product
  const create = async (req, res) => {
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
  const getById = async (req, res) => {
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
  const getAll = async (req, res) => {
    try {
      const products = await getAllProducts();
      res.status(200).json(products);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  // Update a product
  const update = async (req, res) => {
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
  const deleteProduct = async (req, res) => {
    try {
      const productId = req.params.id;
      await removeProduct(productId);
      res.status(204).json(); // No content to send back
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  return {
    create,
    getById,
    getAll,
    update,
    deleteProduct,
  };
};

module.exports = productController;
