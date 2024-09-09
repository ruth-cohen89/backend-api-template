const dbType = process.env.DB_TYPE || "mongo";
// Import connection functions
const connectMongoDB = require("./mongoConnection");
const { connectSQL, closeSQL } = require("./sqlConnection");

const connectDB = async () => {
  if (dbType === "mongo") {
    await connectMongoDB();
  } else if (dbType === "sql") {
    await connectSQL();
  } else {
    console.error("Unknown DB_TYPE. Please set DB_TYPE to 'mongo' or 'sql'.");
    process.exit(1);
  }
};

const closeDB = async () => {
  if (dbType === "mongo") {
    await mongoose.connection.close();
    console.log("MongoDB connection closed.");
  } else if (dbType === "sql") {
    await closeSQL();
  }
};

module.exports = { connectDB, closeDB };
