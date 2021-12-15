const express = require("express");
const infirmierController = require("../controllers/infirmier.controller");
const router = express.Router();

router.get("/", infirmierController.index);

module.exports = router;
