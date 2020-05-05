const jwt = require("jsonwebtoken");

const secret = "mysecret";

module.exports.secret = secret;

module.exports.authenticate = (req, res, next) => {
  jwt.verify(req.cookies.usertoken, secret, (err, payload) => {
    if (err) { 
      console.log(err)
      res.status(401).json({verified: false});
    } else {
      console.log("passed!")
      next();
    }
  });
}