const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema(
  {
    employeeId: { type: Number, required: true, unique: true },
    employeeName: { type: String, required: true }, 
    userName: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    assignmentsId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Assignments",
        default: null,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Employee", EmployeeSchema);
