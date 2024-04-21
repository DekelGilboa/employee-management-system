// Import required modules
const express = require("express");
const Employee = require("./src/models/Employee");

// Create an instance of Express app
const app = express();
const port = 3000; // You can change the port as needed

// Define a basic route
app.get("/", (req, res) => {
  // Create an instance of Employee
  const employee = new Employee(1, "John Doe", "Software Developer", 50000);
  // Display the employee details
  res.send(`Employee Details:<br>
    ID: ${employee.getId()}<br>
    Name: ${employee.getName()}<br>
    Position: ${employee.getPosition()}<br>
    Salary: ${employee.getSalary()}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
