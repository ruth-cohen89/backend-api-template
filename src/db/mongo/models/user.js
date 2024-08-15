// frameworks/mongo/models/user-schema.js
const mongoose = require("mongoose");

// User schema definition
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true, // Ensure the email is always lowercase
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// TODO: do these functions violate clean architecture?
// Middleware to update the updatedAt field before saving
userSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

// Export the User model
//module.exports = mongoose.model("UserModel", userSchema);

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
