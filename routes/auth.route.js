const router = require("express").Router();
const {
  logInController,
  signUpController,
} = require("../controllers/index.js");

// <-------------------------------------------SignUp The Student/Employee In DB----------------------------------->
router.post("/signup", signUpController);

// <-------------------------------------------LogIn The Student/Employee In DB------------------------------------>
router.post("/login", logInController);

module.exports = router;
