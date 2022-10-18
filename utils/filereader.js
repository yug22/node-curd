const fs = require("fs");
const path = require("path");

const studentFilePath = `${path.join(__dirname, "../DB/std.json")}`;
const employeeFilePath = `${path.join(__dirname, "../DB/emp.json")}`;

// File reader ius used to read the data form json files
const fileReader = async (isEmployee) => {
  return isEmployee
    ? fs.readFileSync(employeeFilePath, "utf-8")
    : fs.readFileSync(studentFilePath, "utf-8");
};

// File writer to used to write the data in json files
const fileWriter = async (fileData, isEmployee) => {
  return isEmployee
    ? fs.writeFileSync(employeeFilePath, fileData)
    : fs.writeFileSync(studentFilePath, fileData);
};

module.exports = { fileReader, fileWriter };
