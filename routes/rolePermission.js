const express = require("express");
const rolePermissionController = require("../controllers/rolePermission.controller");
const router = express.Router();

router.get("/", rolePermissionController.index);
router.get("/roles", rolePermissionController.role);
router.get("/permissions", rolePermissionController.permission);

router.post("/", rolePermissionController.addRolePermission);
router.post("/roles", rolePermissionController.addRole);
router.post("/permissions", rolePermissionController.addPermission);

router.delete("/", rolePermissionController.deleteRolePermission);
router.delete("/roles", rolePermissionController.deleteRole);
router.delete("/permissions", rolePermissionController.deletePermission);

router.put("/roles", rolePermissionController.updateRole);
router.put("/permissions", rolePermissionController.updatePermission);

// router.post("/", rolePermissionController.index);
// router.put("/", rolePermissionController.index);

module.exports = router;
