const JWT = require("jsonwebtoken");
const config = require("config");

// <---------------------------------Validate The Upcoming Student------------------------------------->
const authValidation = async (req, res, next) => {
  try {
    const { authtoken } = req.headers;

    if (!authtoken) {
      return res.status(404).json({
        message: "Sorry please provide the token",
      });
    }

    // Seperate the token from token string
    const token = authtoken.split(" ")[1];

    if (!authtoken || !token) {
      return res.status(404).json({
        message: "Sorry please provide the token",
      });
    }

    // Verify the jwt token
    JWT.verify(token, config.get("JWT_SEC_KEY"), (err, user) => {
      if (err) {
        return res.status(403).json({
          message: "Invalid token",
        });
      }
      req.user = user;
      next();
    });
  } catch (error) {
    throw error;
  }
};

module.exports = { authValidation };
