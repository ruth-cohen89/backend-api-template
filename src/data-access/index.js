const dbType = process.env.DB_TYPE || "mongo";
const loadMongoDb = () => {
  return {
    userDb: require("./mongo/user-db"), // MongoDB User DB
    productDb: require("./mongo/product-db"), // MongoDB Product DB
  };
};

const loadSqlDb = () => {
  return {
    userDb: require("./sql/user-db"), // SQL User DB
    productDb: require("./sql/product-db"), // SQL Product DB
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
