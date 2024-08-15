// src/db/mongo/connection.js

const mongoose = require("mongoose");
require("dotenv").config();

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = connectMongoDB;
