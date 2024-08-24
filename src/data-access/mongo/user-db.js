const UserModel = require("../../db/mongo/models/user");
const createUser = require("../../domain/entities/user");

const userDb = {
  async create(userData) {
    const user = createUser(
      userData.username,
      userData.password,
      userData.email,
      userData.role,
      userData.createdAt
    );

    const userDocument = new UserModel({
      username: user.getUserName(),
      email: user.getEmail(),
      password: user.getPassword(),
      role: user.getRole(),
      createdAt: user.getCreatedAt(),
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
    return await UserModel.find();
  },
};

module.exports = userDb;
