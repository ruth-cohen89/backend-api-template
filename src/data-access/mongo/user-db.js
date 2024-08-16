const UserModel = require("../../db/mongo/models/user"); // Import MongoDB model
const User = require("../../domain/entities/user"); // Import domain entity

// User Database Access
const userDb = {
  async create(userData) {
    const user = new User(userData.name, userData.email, userData.password);

    const userDocument = new UserModel({
      name: user.name,
      email: user.email,
      password: user.password, // Ensure to hash the password before saving
      createdAt: user.createdAt,
    });
    return await userDocument.save();
  },

  async getById(userId) {
    return await UserModel.findById(userId);
  },

  async update(userId, userData) {
    return await UserModel.findByIdAndUpdate(userId, userData, { new: true });
  },

  async delete(userId) {
    return await UserModel.findByIdAndDelete(userId);
  },

  async getAll() {
    console.log("get");
    return await UserModel.find();
  },
};

module.exports = userDb;
