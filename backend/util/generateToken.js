const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  const accessToken = jwt.sign(
    { email: user.email, id: user._id },
    "zxczxcxzCzxczxczxczxc",
    { expiresIn: "15m" }
  );

  const refreshToken = jwt.sign(
    { email: user.email, id: user._id },
    "zxczxcxzCzxczxczxczxc",
    { expiresIn: "7d" }
  );

  return { accessToken, refreshToken };
};

module.exports.generateToken = generateToken;
