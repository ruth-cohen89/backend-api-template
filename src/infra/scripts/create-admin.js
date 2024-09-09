const { connectDB, closeDB } = require("../db-connections");
const { createUser } = require("../../use-cases/user");

const runScript = async () => {
  try {
    await connectDB();
    await createUser({
      username: process.env.ADMIN_USERNAME,
      email: process.env.ADMIN_EMAIL,
      password: process.env.ADMIN_PASSWORD,
      role: "admin",
      emailVerified: true,
    });
    console.log("Admin user created successfully.");
  } catch (error) {
    if (error.code === 11000 && error.keyPattern && error.keyPattern.username) {
      console.error("Admin user already exists.");
    } else {
      console.error("Script execution error:", error.message);
    }
  } finally {
    await closeDB();
  }
};

runScript();
