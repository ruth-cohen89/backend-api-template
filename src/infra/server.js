require("module-alias/register");
require("dotenv").config();
const app = require("./app");
const config = require("config");
const { connectDB } = require("./db-connections");

const port = config.get("port");
const host = config.get("host");
const protocol = config.get("protocol");

// const dbType = process.env.DB_TYPE || "mongo";
// const connectDB = async () => {
//   try {
//     if (dbType === "mongo") {
//       const connectMongoDB = require("../db/mongo/connection");
//       await connectMongoDB();
//     } else if (dbType === "sql") {
//       const connectSQL = require("./src/db/sql/connection");
//       await connectSQL();
//     } else {
//       console.error("Error connecting to the database:", error.message);
//       process.exit(1);
//     }
//   } catch (error) {
//     console.error("Error connecting to the database:", error.message);
//     process.exit(1);
//   }
// };

app.listen(port, async () => {
  try {
    await connectDB();
    console.log(`App is running at ${protocol}://${host}:${port}`);
  } catch (error) {
    console.error("Error during server startup:", error.message);
    process.exit(1);
  }
});
