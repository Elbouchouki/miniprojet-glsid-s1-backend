const express = require("express");
const patientController = require("../controllers/patient.controller");
const router = express.Router();

router.get("/", patientController.index);
router.post("/", patientController.addPatient);
router.put("/", patientController.updatePatient);
router.delete("/", patientController.deletePatient);

module.exports = router;
