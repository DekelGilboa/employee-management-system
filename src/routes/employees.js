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

router.route("/").get(getEmployees).post(addEmployee);
router
  .route("/:id")
  .get(getEmployeeByID)
  .put(updateEmployee)
  .delete(deleteEmployee);

module.exports = router;
