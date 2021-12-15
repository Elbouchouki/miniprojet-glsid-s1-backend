const express = require("express");
const authController = require("../controllers/auth.controller");
const { checkAuth } = require("../middleware/check-auth");
const router = express.Router();

router.post("/", authController.index);
router.post("/user", checkAuth, authController.getUser);

module.exports = router;
