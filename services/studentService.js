const { fileReader } = require("../utils/filereader.js");
const mongoose = require("mongoose");
const stdModel = require("../models/std.js");

// <---------------------------------------Student Fees Service----------------------------------->
const studentFeesService = async (studentId) => {
  try {
    const studentInfo = await stdModel.findById({ _id: studentId });
    return studentInfo.fees;
  } catch (error) {
    throw error;
  }
};

// <---------------------------------------Student Result Service--------------------------------->

const studentResultService = async (studentId) => {
  try {
    const studentInfo = await stdModel.findById({ _id: studentId });
    return studentInfo.result;
  } catch (error) {
    throw error;
  }
};

// <---------------------------------------Student Delete Service--------------------------------->

const studentDeleteService = async (studentId) => {
  try {
    await stdModel.findByIdAndRemove({ _id: studentId });
    return;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  studentFeesService,
  studentResultService,
  studentDeleteService,
};
