const JWT = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const config = require("config");

// <---------------- JWT-Token Generator -------------->
const signJwtToken = async (payload) => {
  return JWT.sign(payload, config.get("JWT_SEC_KEY"));
};

// <---------------- Password Encrypter ---------------->
const passwordEncrypter = async (planPassword) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(planPassword, salt);
};

// <---------------- Password Decrypter ---------------->
const passwordDecrypter = async (encryptPassword, planPassword) => {
  return bcrypt.compare(planPassword, encryptPassword);
};

module.exports = { signJwtToken, passwordDecrypter, passwordEncrypter };
