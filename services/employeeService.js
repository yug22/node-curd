const { fileReader, fileWriter } = require("../utils/filereader.js");

const empModel = require("../models/emp.js");
const mongoose = require("mongoose");

const assignmentModel = require("../models/assignments.js");
const emp = require("../models/emp.js");

// <-------------------------------------Get Employee Assignment By employeeId---------------------->
const getAssignmentsService = async (employeeId) => {
  try {
    const employeeData = await empModel
      .findById({ _id: employeeId })
      .populate("assignmentsId");

    const assignments = employeeData.assignmentsId;

    return assignments;
  } catch (error) {
    throw error;
  }
};

// <-------------------------------------Post Employee Assignment By EmployeeID----------------------->
const postAssignmentSerice = async (employeeId, newAssignment) => {
  try {
    const assignment = await assignmentModel.create(newAssignment);

    const empData = await empModel.findById({ _id: employeeId });

    empData.assignmentsId.push(assignment._id);
    empData.save();
    return;
  } catch (error) {
    throw error;
  }
};

// <-------------------------------------Delete Employee By EmployeeID----------------------->

const deleteEmplyoeeService = async (employeeId) => {
  try {
    await empModel.findByIdAndRemove({ _id: employeeId });
    return;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAssignmentsService,
  postAssignmentSerice,
  deleteEmplyoeeService,
};
