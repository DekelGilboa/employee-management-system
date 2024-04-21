const mongoose = require("mongoose");

// Define the schema for the Employee model
const employeeSchema = new mongoose.Schema({
  // id is automatically added by MongoDB
  name: {
    type: String,
    required: [true, "Name must be provided"],
    minlength: [2, "Name must be at least 2 characters long"],
    maxlength: [50, "Name cannot exceed 50 characters"],
  },

  position: {
    type: String,
    required: [true, "Position must be provided"],
    // enum: {
    //   values: ["Manager", "Developer", "Designer", "HR"],
    //   message: "Invalid position",
    // },
    minlength: [2, "Position must be at least 2 characters long"],
  },

  salary: {
    type: Number,
    required: [true, "Salary must be provided"],
    min: [1, "Salary must be greater than 0"],
    max: [1000000, "Salary cannot exceed 1,000,000"],
  },
});

// Create the Employee model based on the schema
const Employee = mongoose.model("Employee", employeeSchema);

// Export the Employee model
module.exports = Employee;
