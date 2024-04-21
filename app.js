const express = require("express");
const Employee = require("./src/models/Employee");
const connect = require("./src/db/connect");

const app = express();
const port = 3000;

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

connect().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
});
