const dbType = process.env.DB_TYPE || "mongo";
const loadMongoDb = () => {
  return {
    userDb: require("./mongo/user-db"),
    productDb: require("./mongo/product-db"),
  };
};

const loadSqlDb = () => {
  return {
    userDb: require("./sql/user-db"),
    productDb: require("./sql/product-db"),
  };
};

let dbs;

if (dbType === "mongo") {
  dbs = loadMongoDb();
} else if (dbType === "sql") {
  dbs = loadSqlDb();
} else {
  throw new Error("Unsupported database type");
}

module.exports = {
  userDb: dbs.userDb,
  productDb: dbs.productDb,
};
