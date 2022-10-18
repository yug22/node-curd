const { deleteEmplyoeeService } = require("../services/employeeService.js");
const {
  getAssignmentsService,
  postAssignmentSerice,
} = require("../services/index.js");

// <------------------------------------Get Employee Assignment Controller------------------------------------->
const getAssignmentsController = async (req, res) => {
  try {
    const empId = req.params.empId;
    const employeeDetails = await getAssignmentsService(empId);

    res.status(200).json({
      employeeDetails,
    });
  } catch (error) {
    throw error;
  }
};

// <------------------------------------Post Employee Assignment Controller------------------------------------>
const postAssignmentController = async (req, res) => {
  try {
    const employeeId = req.params.empId;
    await postAssignmentSerice(employeeId, req.body);
    res.status(200).json({
      message: `New assignment successfully added to employeeId ${employeeId}`,
      assignmentData: req.body,
    });
  } catch (error) {
    throw error;
  }
};

// <------------------------------------Delete Employee Controller------------------------------------>
const deleteEmplyoeeController = async (req, res) => {
  try {
    const employeeId = req.params.empId;
    await deleteEmplyoeeService(employeeId);
    res.status(200).json({
      message: "Employee delete from DB",
    });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAssignmentsController,
  postAssignmentController,
  deleteEmplyoeeController,
};
