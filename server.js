require("dotenv").config();
const app = require("./src/app");
const config = require("config");

const port = config.get("port");
const host = config.get("host");
const protocol = config.get("protocol");

const dbType = process.env.DB_TYPE || "mongo"; // Default to MongoDB

// TODO: add catch async errors by a custom catch async file
const connectDB = async () => {
  if (dbType === "mongo") {
    const connectMongoDB = require("./src/db/mongo/connection");
    await connectMongoDB();
  } else if (dbType === "sql") {
    const connectSQL = require("./src/db/sql/connection");
    await connectSQL();
  } else {
    throw new Error("Unsupported database type");
  }
};

app.listen(port, async () => {
  await connectDB(); // Connect to the database before starting the server
  console.log(`App is running at ${protocol}://${host}:${port}`);
});
