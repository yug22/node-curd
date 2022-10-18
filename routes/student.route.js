const router = require("express").Router();

const {
  studentFeesController,
  studentResultController,
  studentDeleteController,
} = require("../controllers/index.js");

const { authValidation } = require("../middlewares/auth.Middleware.js");

// <--------------- Get Student Fees ---------------->
router.get("/student/:studentId/fees", authValidation, studentFeesController);

// <------------------------------------------Get Student Result------------------------------------>
router.get(
  "/student/:studentId/result",
  authValidation,
  studentResultController
);

// <------------------------------------------Get Student Result------------------------------------>
router.delete(
  "/student/:studentId/studentDelete",
  authValidation,
  studentDeleteController
);

module.exports = router;
