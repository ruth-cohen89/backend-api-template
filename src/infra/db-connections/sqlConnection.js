const { Sequelize } = require("sequelize");
require("dotenv").config();

const dialect = process.env.SQL_DIALECT || "mysql"; // Default to MySQL if not set

const sequelize = new Sequelize(
  process.env.SQL_DATABASE,
  process.env.SQL_USERNAME,
  process.env.SQL_PASSWORD,
  {
    host: process.env.SQL_HOST,
    dialect: dialect, // Could be 'mysql', 'postgres', 'sqlite', etc.
  }
);

const connectSQL = async () => {
  try {
    await sequelize.authenticate();
    console.log(`Connected to ${dialect} database successfully.`);
  } catch (error) {
    console.error("Unable to connect to the SQL database:", error.message);
    process.exit(1);
  }
};

const closeSQL = async () => {
  if (sequelize) {
    await sequelize.close();
    console.log("SQL connection closed.");
  }
};

module.exports = { connectSQL, closeSQL };
