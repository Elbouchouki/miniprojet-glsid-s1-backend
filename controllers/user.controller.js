const models = require("../models");
const { Sequelize, Op } = require("sequelize");

module.exports = {
  async index(req, res) {
    try {
      const users = await models.User.findAll({
        include: { all: true, nested: true },
      });
      res.status(200).json({
        users: users,
      });
    } catch (error) {
      res.status(500).json({
        message: "error",
      });
    }
  },
  async findUser(req, res) {
    try {
      const username = req.params.username;
      const user = await models.User.findOne({
        where: { username: { [Op.eq]: username } },
      });
      if (!user) {
        res.status(404).json({
          message: "user not found",
        });
      }
      res.status(200).json({
        user: user,
      });
    } catch (error) {
      res.status(500).json({
        message: "error",
      });
    }
  },
  async addUser(req, res) {
    try {
      const username = req.body.username;
      const email = req.body.email;
      const password = req.body.password;
      const role = req.body.role;

      const checkUsername = await models.User.findOne({
        where: { username: { [Op.eq]: username } },
      });
      if (checkUsername) {
        res.status(409).json({
          message: "user already exists",
        });
        return;
      }
      const checkEmail = await models.User.findOne({
        where: { email: { [Op.eq]: email } },
      });
      if (checkEmail) {
        res.status(409).json({
          message: "email already exists",
        });
        return;
      }

      const user = await models.User.create({
        username: username,
        email: email,
        password: password,
        role: role,
      });
      res.status(201).json({
        result: "user created",
      });
    } catch (error) {
      res.status(500).json({
        message: "error",
      });
    }
  },
  async deleteUser(req, res) {
    try {
      const username = req.body.username;
      const user = await models.User.destroy({
        where: { username: { [Op.eq]: username } },
      });
      res.status(202).json({
        result: "user deleted",
      });
    } catch (error) {
      res.status(500).json({
        message: "error",
      });
    }
  },
  async updateUser(req, res) {
    try {
      const username = req.body.username;
      const email = req.body.email;
      const password = req.body.password;
      const role = req.body.role;
      const checkUser = await models.User.findOne({
        where: { username: { [Op.eq]: username } },
      });
      if (!checkUser) {
        res.status(404).json({
          message: "User doesn't exist",
        });
        return;
      }
      const checkEmail = await models.User.findOne({
        where: { mail: { [Op.eq]: mail }, username: { [Op.ne]: username } },
      });
      if (checkEmail) {
        res.status(409).json({
          message: "email already exists",
        });
        return;
      }
      const user = await models.User.update(
        {
          email: email,
          password: password,
          role: role,
        },
        {
          where: { username: { [Op.eq]: username } },
        }
      );
      res.status(202).json({
        result: "user updated",
      });
    } catch (error) {
      res.status(500).json({
        message: "error",
      });
    }
  },
};
