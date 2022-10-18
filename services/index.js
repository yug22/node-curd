const {
  studentFeesService,
  studentResultService,
  studentDeleteService,
} = require("./studentService.js");
const {
  getAssignmentsService,
  postAssignmentSerice,
  deleteEmplyoeeService,
} = require("./employeeService.js");
const { signUpService, logInService } = require("./authService.js");

module.exports = {
  studentFeesService,
  studentResultService,
  getAssignmentsService,
  postAssignmentSerice,
  signUpService,
  logInService,
  deleteEmplyoeeService,
  studentDeleteService,
};
