const router = require("express").Router();

const {
  deleteEmplyoeeController,
} = require("../controllers/employee.controller.js");
const {
  getAssignmentsController,
  postAssignmentController,
} = require("../controllers/index.js");

const { authValidation } = require("../middlewares/auth.Middleware.js");

// <--------------------------------Post New Assignment To EmployeeID----------------------------------->
router.post(
  "/emp/:empId/add/assignment",
  authValidation,
  postAssignmentController
);

// <-------------------------------- Get Assignment Details BY EmployeeID------------------------------->
router.get("/emp/:empId/assignment", authValidation, getAssignmentsController);

// <-------------------------------- Delete Employee BY EmployeeID------------------------------->
router.delete(
  "/emp/:empId/employeeDelete",
  authValidation,
  deleteEmplyoeeController
);

module.exports = router;
