const mongoose = require("mongoose");

const AssignmentsSchema = new mongoose.Schema({
  assignmentsName: { type: String, required: true },
  status: { type: String, enum: ["finished", "pending"], required: true },
});

module.exports = mongoose.model("Assignments", AssignmentsSchema);
