//const connect = require("./src/utils/connect");
const app = require("./app");
const config = require("config");

const port = config.get("port");
const host = config.get("host");
const protocol = config.get("protocol");

app.listen(port, async () => {
  console.log(`App is running at ${protocol}://${host}:${port}`);
  //await connect();
});
