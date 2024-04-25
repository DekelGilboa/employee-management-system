const mongoose = require("mongoose");

// Define the schema for the Employee model
const employeeSchema = new mongoose.Schema({
  // id is automatically added by MongoDB
  name: {
    type: String,
    required: [true, "Name must be provided\n"],
    minlength: [2, "Name must be at least 2 characters long\n"],
    maxlength: [50, "Name cannot exceed 50 characters\n"],
  },

  position: {
    type: String,
    required: [true, "Position must be provided\n"],
    minlength: [2, "Position must be at least 2 characters long\n"],
  },

  salary: {
    type: Number,
    required: [true, "Salary must be provided\n"],
    min: [1, "Salary must be greater than 0\n"],
    max: [1000000, "Salary cannot exceed 1,000,000\n"],
  },
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
