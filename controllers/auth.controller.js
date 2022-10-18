const { logInService, signUpService } = require("../services/index.js");

// <----------------------------------------------SignUp Controller-------------------------------------->

const signUpController = async (req, res) => {
  try {
    const { isEmployee } = req.query;

    // Call the signUp service layer
    const isDone = await signUpService(Number(isEmployee), req.body);

    if (!isDone) {
      return res.status(404).json({
        message: "Invalid details",
      });
    }
    res.status(200).json({
      message: Number(isEmployee)
        ? "Employee User SignUp successfully"
        : "Student SignUp Successfully",
    });
  } catch (error) {
    throw error;
  }
};

// <----------------------------------------------LoginUp Controller------------------------------------>
const logInController = async (req, res) => {
  try {
    const { isEmployee } = req.query;

    //Call the signUp service layer
    const token = await logInService(Number(isEmployee), req.body);

    if (!token) {
      return res.status(404).json({
        message: "Invalid details",
      });
    }
    res.status(200).json({
      message: "User login successfully",
      token: `Bearer ${token}`,
      data: req.body,
    });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  logInController,
  signUpController,
};
