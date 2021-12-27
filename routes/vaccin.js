const express = require("express");
const vaccinController = require("../controllers/vaccin.controller");
const router = express.Router();

router.get("/", vaccinController.index);
router.put("/", vaccinController.updateVaccin);

module.exports = router;
