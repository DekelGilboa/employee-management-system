// connect to MongoDB

const mongoose = require("mongoose");
require("dotenv").config();

const connect = async () => {
  const uri = process.env.MONGO_URI;
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB: ", error);
  }
};

module.exports = connect;
