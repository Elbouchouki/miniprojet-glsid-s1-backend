const express = require("express");
const userController = require("../controllers/user.controller");
const router = express.Router();

router.get("/", userController.index);
router.post("/", userController.addUser);
router.put("/", userController.updateUser);
router.delete("/", userController.deleteUser);

module.exports = router;
