const jwt = require("jsonwebtoken");
const checkAuth = (req, res, next) => {
  try {
    // split(" ")[1];
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(401).json({
        message: "Unauthorized.",
        details: e,
      });
    }
    const decodedToken = jwt.verify(token, "" + process.env.JWT_SECRET);
    req.user = decodedToken;
    next();
  } catch (e) {
    return res.status(403).json({
      message: "Invalide or expired token.",
      details: e,
    });
  }
};
const checkRole = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      res.status(403).json({
        message: "You don't have permissions.",
      });
    } else {
      next();
    }
  };
};

module.exports = {
  checkAuth,
  checkRole,
};
