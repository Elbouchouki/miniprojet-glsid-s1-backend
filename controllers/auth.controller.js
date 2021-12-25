const models = require("../models");
const { Sequelize, Op } = require("sequelize");
const jwt = require("jsonwebtoken");

const generateAcessToken = (username, role) => {
  return jwt.sign(
    {
      username: username,
      role: role,
    },
    "" + process.env.JWT_SECRET
  );
};

module.exports = {
  async index(req, res) {
    try {
      const username = req.body.username;
      const password = req.body.password;

      const user = await models.User.findOne({
        where: {
          username: { [Op.eq]: username },
          password: { [Op.eq]: password },
        },
        include: [
          {
            model: models.Role,
            nested: true,
          },
        ],
      });
      if (user) {
        const token = generateAcessToken(username, user.Role?.role_name);
        res.status(200).json({
          user: {
            username: user.username,
            email: user.email,
            role: {
              id: user.Role?.id,
              name: user.Role?.role_name,
            },
          },
          token,
        });
      }
      res.status(404).json("username or pass incorrect");
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async getUser(req, res) {
    try {
      const username = req.user.username;
      const user = await models.User.findOne({
        where: {
          username: { [Op.eq]: username },
        },
        include: [
          {
            model: models.Role,
            nested: true,
          },
        ],
      });
      if (user) {
        res.status(200).json({
          user: {
            username: user.username,
            email: user.email,
            role: {
              id: user.Role?.id,
              name: user.Role?.role_name,
            },
          },
        });
      }
      res.status(200).json({
        user: null,
      });
    } catch (error) {
      res.status(500).json({
        message: "error",
      });
    }
  },
};
