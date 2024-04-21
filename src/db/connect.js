const mongoose = require("mongoose");

const uri =
  "mongodb+srv://dekeltest3:MpRzAQoecvFViWuV@nodeexpressprojects.crwvwod.mongodb.net/?retryWrites=true&w=majority&appName=NodeExpressProjects";

const connect = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB: ", error);
  }
};

module.exports = connect;
