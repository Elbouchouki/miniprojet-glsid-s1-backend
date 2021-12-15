const express = require("express");
const articleController = require("../controllers/article.controller");
const router = express.Router();

router.get("/:type", articleController.index);

module.exports = router;
