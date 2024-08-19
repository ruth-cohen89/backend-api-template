const UserModel = require("../../db/mongo/models/user"); // Import MongoDB model
const createUser = require("../../domain/entities/user"); // Import user factory function

// User Database Access
const userDb = {
  async create(userData) {
    // const user = new User(userData.username, userData.email, userData.password);

    // const userDocument = new UserModel({
    //   username: user.username,
    //   email: user.email,
    //   password: user.password, // Ensure to hash the password before saving
    //   role: user.role,
    //   createdAt: user.createdAt,
    // });

    const user = createUser(
      userData.username,
      userData.password, // Ensure to hash the password before saving
      userData.email,
      userData.role,
      userData.createdAt // This should be handled by the validator
    );

    // Create a MongoDB document from the user entity
    const userDocument = new UserModel({
      username: user.getUserName(),
      email: user.getEmail(),
      password: user.getPassword(), // Hash the password before saving
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
