const ProductModel = require("../../db-schemas/mongo/models/product");
const createProduct = require("../../domain/entities/product");

const productDb = {
  async create(productData) {
    const product = createProduct(
      productData.name,
      productData.price,
      productData.description
    );

    const productDocument = new ProductModel({
      name: product.getName(),
      price: product.getPrice(),
      description: product.getDescription(),
      createdAt: product.getCreatedAt(),
      isDeleted: product.isDeleted,
      deletedAt: product.getDeletedAt,
    });

    return await productDocument.save();
  },

  async getById(productId, filter = {}) {
    filter.isDeleted = false;
    return await ProductModel.findOne({ _id: productId, ...filter });
  },

  async findOne(data) {
    return await ProductModel.findOne(data);
  },

  async update(productId, productData, filter = {}) {
    filter.isDeleted = false;

    return await ProductModel.findOneAndUpdate(
      { _id: productId, ...filter },
      productData,
      { new: true }
    );
  },

  async delete(productId) {
    return await ProductModel.findByIdAndDelete(productId);
  },

  async getAll(filter) {
    return await ProductModel.find(filter);
  },
};

module.exports = productDb;
