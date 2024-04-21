// Desc: Controller for employees

const Employee = require("../models/Employee");
const { symbolToMongoMap: map, regEx } = require("../utils/symbolToMongo");

// Get all employees and add option to filter by name, position, salary, and custom filters (e.g., salary>=50000)
const getEmployees = async (req, res, next) => {
  const { name, position, salary, filters, sort } = req.query;
  const query = {};

  // filters options
  if (name) {
    query.name = { $regex: name, $options: "i" };
  }
  if (position) {
    query.position = { $regex: position, $options: "i" };
  }
  if (salary) {
    query.salary = { $eq: salary };
  }
  if (filters) {
    let fixFilters = filters.replace(regEx, (match) => `-${map[match]}-`);
    fixFilters = fixFilters.split(",").forEach((item) => {
      const [field, operator, value] = item.split("-");
      if ("salary" === field) {
        query[field] = { [operator]: +value };
      }
    });
  }

  try {
    // sort options (default is by ID)
    const sortOptions = sort?.split(",").join(" ");
    const employees = Employee.find(query);
    const result = await employees.sort((sortOptions ?? "_id"));
    res.json({ count: result.length, data: result });
  } catch (error) {
    next(error);
  }
};

// Add a new employee
const addEmployee = async (req, res, next) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    res.status(201).json({ msg: "Employee added", employee });
  } catch (error) {
    next(error);
  }
};

// Get an employee by ID
const getEmployeeByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findById(id);
    if (!employee) {
      return res.status(404).json({ msg: `Employee with ID ${id} not found` });
    }
    res.status(200).json(employee);
  } catch (error) {
    next(error);
  }
};

// Update an employee by ID
const updateEmployee = async (req, res, next) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!employee) {
      return res.status(404).json({ msg: `Employee with ID ${id} not found` });
    }
    res.status(200).json({ msg: "Employee updated", employee });
  } catch (error) {
    next(error);
  }
};

// Delete an employee by ID
const deleteEmployee = async (req, res, next) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findByIdAndDelete(id);
    if (!employee) {
      return res.status(404).json({ msg: `Employee with ID ${id} not found` });
    }
    res.status(200).json({ msg: "Employee Deleted", employee });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getEmployees,
  addEmployee,
  getEmployeeByID,
  updateEmployee,
  deleteEmployee,
};
