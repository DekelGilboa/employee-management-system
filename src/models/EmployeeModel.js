const mongoose = require("mongoose");

// Define the schema for the Employee model
const employeeSchema = new mongoose.Schema({
  // id: { type: Number, required: true },
  name: { type: String, required: true },
  position: { type: String, required: true },
  salary: { type: Number, required: true },
});

// Create the Employee model based on the schema
const Employee = mongoose.model("Employee", employeeSchema);

// Export the Employee model
module.exports = Employee;
