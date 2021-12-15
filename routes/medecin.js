const express = require("express");
const medecinController = require("../controllers/medecin.controller");
const router = express.Router();

router.get("/", medecinController.index);

module.exports = router;
