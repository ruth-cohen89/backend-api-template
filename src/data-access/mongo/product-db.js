const ProductModel = require("../../db/mongo/models/product"); // Import MongoDB model
const createProduct = require("../../domain/entities/product"); // Import product factory function

const productDb = {
  async create(productData) {
    const product = createProduct(
      productData.name,
      productData.price,
      productData.description,
      productData.createdAt // This should be handled by the validator or default to now
    );

    // Create a MongoDB document from the product entity
    const productDocument = new ProductModel({
      name: product.getName(),
      price: product.getPrice(),
      description: product.getDescription(),
      createdAt: product.getCreatedAt(),
    });

    return await productDocument.save();
  },

  async getById(productId) {
    return await ProductModel.findById(productId);
  },

  async update(productId, productData) {
    return await ProductModel.findByIdAndUpdate(productId, productData, {
      new: true,
    });
  },

  async delete(productId) {
    return await ProductModel.findByIdAndDelete(productId);
  },

  async getAll() {
    return await ProductModel.find();
  },
};

module.exports = productDb;
