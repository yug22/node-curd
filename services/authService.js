const {
  passwordDecrypter,
  passwordEncrypter,
  signJwtToken,
} = require("../utils/authHelper.js");

const empModel = require("../models/emp.js");
const stdModel = require("../models/std.js");
const { sign } = require("jsonwebtoken");

// const { fileReader, fileWriter } = require("../utils/filereader");

// <---------------------------------------SignUp The Employee/Student----------------------------------->
const signUpService = async (isEmployee, signUpInfo) => {
  try {
    // Schema for employee/student info
    const { password } = signUpInfo;

    // Hashing on plan password
    signUpInfo.password = await passwordEncrypter(password);

    isEmployee
      ? await empModel.create(signUpInfo)
      : await stdModel.create(signUpInfo);

    return true;
  } catch (error) {
    throw error;
  }
};

// <---------------------------------------LogIn The Employee/Student------------------------------------>

const logInService = async (isEmployee, logInInfo) => {
  try {
    const { userName, password } = logInInfo;

    // If username and password not present
    if (!userName || !password) return false;

    // Fetch the info based on username
    const userInfo = isEmployee
      ? await empModel.findOne({ userName: logInInfo.userName })
      : await stdModel.findOne({ userName: logInInfo.userName });

    if (userInfo.length === 0) return false;

    const isPasswordMatch = await passwordDecrypter(
      userInfo.password,
      password
    );
    if (!isPasswordMatch) return false;

    const token = await signJwtToken(userInfo.toString());
    return token;
  } catch (error) {
    throw error;
  }
};

module.exports = { signUpService, logInService };
