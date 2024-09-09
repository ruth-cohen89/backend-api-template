const { connectDB, closeDB } = require("../db-connections");
const createUserUseCase = require("./path/to/createUserUseCase"); // Update the path as needed

const runScript = async () => {
  try {
    await connectDB();
    await createUserUseCase({
      username: "admin",
      password: "admin123",
      role: "admin",
    });
    console.log("Admin user created successfully.");
  } catch (error) {
    console.error("Script execution error:", error.message);
  } finally {
    // Optionally close the connection if it's a short-lived script
    await closeDB();
  }
};

runScript();
