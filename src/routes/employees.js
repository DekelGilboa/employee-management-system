// employees router
const express = require("express");
const router = express.Router();

const {
  getEmployees,
  addEmployee,
  getEmployeeByID,
  updateEmployee,
  deleteEmployee,
} = require("../controllers/employees");

router
  .get("/", async (req, res, next) => {
    getEmployees(req, res, next);
  })
  .post("/", async (req, res, next) => {
    addEmployee(req, res, next);
  })
  .get("/:id", async (req, res, next) => {
    getEmployeeByID(req, res, next);
  })
  .put("/:id", async (req, res, next) => {
    updateEmployee(req, res, next);
  })
  .delete("/:id", async (req, res, next) => {
    deleteEmployee(req, res, next);
  });

module.exports = router;
