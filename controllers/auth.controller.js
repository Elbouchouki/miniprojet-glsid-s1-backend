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
        include: { all: true, nested: true },
      });
      if (user) {
        const token = generateAcessToken(username, user.Role?.role_name);
        res.status(200).json({
          user: {
            username: user.username,
            cin: user.cin,
            nom: user.nom,
            prenom: user.prenom,
            phone: user.phone,
            mail: user.mail,
            role: user.Role?.role_name,
            permissions: user.Role?.perms,
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
      console.log(username);
      console.log(req);
      console.log("---------------");
      const user = await models.User.findOne({
        where: {
          username: { [Op.eq]: username },
        },
        include: { all: true, nested: true },
      });
      if (user) {
        res.status(200).json({
          user: {
            username: user.username,
            cin: user.cin,
            nom: user.nom,
            prenom: user.prenom,
            phone: user.phone,
            mail: user.mail,
            role: user.Role?.role_name,
            permissions: user.Role?.perms,
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
