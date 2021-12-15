const models = require("../models");
const { Sequelize, Op } = require("sequelize");

module.exports = {
  async index(req, res) {
    try {
      const infirmiers = await models.Infirmier.findAll({});
      res.status(200).json({ result: infirmiers });
    } catch (error) {
      res.status(500).json({
        message: "error",
      });
    }
  },
};
