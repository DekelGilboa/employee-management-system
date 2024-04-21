const mongoose = require("mongoose");
require("dotenv").config();

class Database {
  constructor() {
    if (!Database.instance) {
      // Create a new MongoDB connection
      this.connect();
      Database.instance = this;
    }
    return Database.instance;
  }

  async connect() {
    const uri = process.env.MONGO_URI;
    try {
      await mongoose.connect(uri);
      console.log("Connected to MongoDB");
    } catch (error) {
      console.error("Error connecting to MongoDB: ", error);
    }
  }
}

module.exports = new Database();
