// data-access/index.js
const MySQLConnection = require("../infrastructure/sql/mysql-connection");
const UserSQLRepository = require("./sql/user-db");
const ProductSQLRepository = require("./sql/product-db");

// TODO: move into config
const dbConfig = {
  host: "localhost",
  user: "root",
  password: "password",
  database: "your_database",
};

const mysqlConnection = new MySQLConnection(dbConfig);

// TODO: change the name repo to db and export in a different way
(async () => {
  try {
    await mysqlConnection.connect();
    const userRepository = new UserSQLRepository(
      mysqlConnection.getConnection()
    );
    const productRepository = new ProductSQLRepository(
      mysqlConnection.getConnection()
    );

    module.exports = {
      userRepository,
      productRepository,
      closeConnection: () => mysqlConnection.disconnect(),
    };

    console.log("Database connection established and repositories are ready.");
  } catch (error) {
    console.error("Error establishing database connection:", error);
    process.exit(1);
  }
})();
