const models = require("../models");
const { Sequelize, Op } = require("sequelize");

module.exports = {
  async index(req, res) {
    try {
      const rolePermission = await models.Role.findAll({
        include: "perms",
      });
      res.status(200).json({
        rolePermission: rolePermission,
      });
    } catch (error) {
      res.status(500).json({
        message: "error",
      });
    }
  },
  async addRolePermission(req, res) {
    try {
      const role_id = req.body.role_id;
      const permission_id = req.body.permission_id;
      const rolePermission = await models.RolePermission.create({
        RoleId: role_id,
        PermissionId: permission_id,
      });
      res.status(201).json({
        result: "permission added to role successfuly",
      });
    } catch (error) {
      res.status(500).json({
        message: "error",
      });
    }
  },
  async deleteRolePermission(req, res) {
    try {
      const role_id = req.body.role_id;
      const permission_id = req.body.permission_id;
      const rolePermission = await models.RolePermission.destroy({
        where: {
          RoleId: { [Op.eq]: role_id },
          PermissionId: { [Op.eq]: permission_id },
        },
      });
      res.status(201).json({
        result: "permission added to role successfuly",
      });
    } catch (error) {
      res.status(500).json({
        message: "error",
      });
    }
  },
  async role(req, res) {
    try {
      const role = await models.Role.findAll({});
      res.status(200).json({
        role: role,
      });
    } catch (error) {
      res.status(500).json({
        message: "error",
      });
    }
  },
  async addRole(req, res) {
    try {
      const role_name = req.body.role_name;
      const role = await models.Role.create({ role_name: role_name });
      res.status(201).json({
        result: "role created",
      });
    } catch (error) {
      res.status(500).json({
        message: "error",
      });
    }
  },
  async deleteRole(req, res) {
    try {
      const id = req.body.id;
      const role = await models.Role.destroy({
        where: { id: { [Op.eq]: id } },
      });
      res.status(202).json({
        result: "role deleted",
      });
    } catch (error) {
      res.status(500).json({
        message: "error",
      });
    }
  },
  async updateRole(req, res) {
    try {
      const id = req.body.id;
      const role_name = req.body.role_name;
      const role = await models.Role.update(
        { role_name: role_name },
        {
          where: { id: { [Op.eq]: id } },
        }
      );
      res.status(202).json({
        result: "role updated",
      });
    } catch (error) {
      res.status(500).json({
        message: "error",
      });
    }
  },
  async permission(req, res) {
    try {
      const permission = await models.Permission.findAll({});
      res.status(200).json({
        permission: permission,
      });
    } catch (error) {
      res.status(500).json({
        message: "error",
      });
    }
  },
  async addPermission(req, res) {
    try {
      const name = req.body.name;
      const type = req.body.type;
      const permission = await models.Permission.create({
        name: name,
        type: type,
      });
      res.status(201).json({
        result: "permission created",
      });
    } catch (error) {
      res.status(500).json({
        message: "error",
      });
    }
  },
  async deletePermission(req, res) {
    try {
      const id = req.body.id;
      const permission = await models.Permission.destroy({
        where: { id: { [Op.eq]: id } },
      });
      res.status(202).json({
        result: "permission deleted",
      });
    } catch (error) {
      res.status(500).json({
        message: "error",
      });
    }
  },
  async updatePermission(req, res) {
    try {
      const id = req.body.id;
      const name = req.body.name;
      const type = req.body.type;
      const permission = await models.Permission.update(
        { name: name, type: type },
        {
          where: { id: { [Op.eq]: id } },
        }
      );
      res.status(202).json({
        result: "permission updated",
      });
    } catch (error) {
      res.status(500).json({
        message: "error",
      });
    }
  },
  
};
