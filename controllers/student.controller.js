const {
  studentFeesService,
  studentResultService,
  studentDeleteService
} = require("../services/index.js");

// <----------------------------------Student Fees Controller-------------------------------------->
const studentFeesController = async (req, res) => {
  try {
    const studentId = req.params.studentId;
    const studentFees = await studentFeesService(studentId);
    res.status(200).json({
      studentFees,
    });
  } catch (error) {
    throw error;
  }
};

// <-----------------------------------Student Result Controller------------------------------------>
const studentResultController = async (req, res) => {
  try {
    const studentId = req.params.studentId;
    const studentResult = await studentResultService(studentId);
    res.status(200).json({
      studentResult,
    });
  } catch (error) {
    throw error;
  }
};

// <-----------------------------------Student Delete Controller------------------------------------>

const studentDeleteController = async (req, res) => {
  try {
    const studentId = req.params.studentId;
    await studentDeleteService(studentId);
    res.status(200).json({ message: "Student delete successfully" });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  studentFeesController,
  studentResultController,
  studentDeleteController,
};
