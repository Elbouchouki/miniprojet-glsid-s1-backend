const express = require("express");
const infirmierController = require("../controllers/infirmier.controller");
const router = express.Router();

router.get("/", infirmierController.index);
router.post("/", infirmierController.addInfirmier);
router.put("/", infirmierController.updateInfirmier);
router.delete("/", infirmierController.deleteInfirmier);

module.exports = router;
