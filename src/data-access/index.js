const SqlUserDb = require("./sql/sql-user-db");
const MongoUserDb = require("./mongo-user-db");

const useSql = process.env.DB_TYPE === "sql";

const userDb = useSql ? new SqlUserDb() : new MongoUserDb();

module.exports = {
  userDb,
};
