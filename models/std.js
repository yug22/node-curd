const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema(
  {
    studentId: { type: Number, require: true, unique: true },
    studentName: { type: String, require: true },
    userName: { type: String, require: true },
    password: { type: String, required: true },
    fees: { type: Number, required: true },
    result: { type: Object, default: null },
  },

  { timestamps: true }
);

module.exports = mongoose.model("Student", StudentSchema);
