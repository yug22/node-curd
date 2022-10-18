const router = require("express").Router();
const employeeRoutes = require("./employee.route.js");
const studentRoutes = require("./student.route.js");
const authRoutes = require("./auth.route.js");

// <------------- Use All The Routes Present In V1 --------------->
router.use("/v1", authRoutes, studentRoutes, employeeRoutes);

module.exports = router;
