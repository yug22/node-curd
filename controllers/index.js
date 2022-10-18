// <------------ import auth controllers ----------->
const { logInController, signUpController } = require("./auth.controller.js");

// <------------ import student controllers ---------->
const {
  studentFeesController,
  studentResultController,
  studentDeleteController,
} = require("./student.controller.js");

// <------------ import Employee controllers ---------->
const {
  getAssignmentsController,
  postAssignmentController,
  deleteEmplyoeeController,
} = require("./employee.controller.js");

// <------------ Export all the controllers ----------->
module.exports = {
  studentFeesController,
  studentResultController,
  getAssignmentsController,
  postAssignmentController,
  logInController,
  signUpController,
  deleteEmplyoeeController,
  studentDeleteController,
};
