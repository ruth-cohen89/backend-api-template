const ProductModel = require("../../db/mongo/models/product"); // Import MongoDB model
const Product = require("../../domain/entities/product"); // Import domain entity

const productDb = {
  async create(productData) {
    const product = new Product(
      productData.name,
      productData.price,
      productData.description
    );
    const productDocument = new ProductModel({
      name: product.name,
      price: product.price,
      description: product.description,
      createdAt: product.createdAt,
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
