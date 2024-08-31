const UserModel = require("../../db/mongo/models/user");
const createUser = require("../../domain/entities/user");

const userDb = {
  async create(userData) {
    const user = createUser(
      userData.username,
      userData.password,
      userData.email,
      userData.role,
      userData.createdAt,
      userData.emailVerified,
      userData.verificationToken,
      userData.verificationTokenExpires
    );

    const userDocument = new UserModel({
      username: user.getUserName(),
      password: user.getPassword(),
      email: user.getEmail(),
      role: user.getRole(),
      verificationToken: user.getVerificationToken(),
      verificationTokenExpires: user.getVerificationTokenExpires(),
    });

    return await userDocument.save();
  },

  async getById(userId) {
    return await UserModel.findById(userId);
  },

  async findOne(data) {
    return await UserModel.findOne(data);
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
