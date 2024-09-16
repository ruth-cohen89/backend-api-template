require("module-alias/register");
require("dotenv").config();
const app = require("./app");
const config = require("config");
const { connectDB } = require("./db-connections");

const port = config.get("port");
const host = config.get("host");
const protocol = config.get("protocol");

app.listen(port, async () => {
  try {
    await connectDB();
    console.log(`App is running at ${protocol}://${host}:${port}`);
  } catch (error) {
    console.error("Error during server startup:", error.message);
    process.exit(1);
  }
});
