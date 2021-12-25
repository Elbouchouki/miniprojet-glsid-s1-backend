const express = require("express");
const medecinController = require("../controllers/medecin.controller");
const router = express.Router();

router.get("/", medecinController.index);
router.post("/", medecinController.addMedecin);
router.put("/", medecinController.updateMedecin);
router.delete("/", medecinController.deleteMedecin);

module.exports = router;
