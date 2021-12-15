const express = require("express");
const reservationController = require("../controllers/reservation.controller");
const router = express.Router();

router.get("/", reservationController.index);

module.exports = router;
