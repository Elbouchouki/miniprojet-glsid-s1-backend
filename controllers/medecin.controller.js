const models = require("../models");
const { Sequelize, Op } = require("sequelize");

module.exports = {
  async index(req, res) {
    try {
      const medecins = await models.Medecin.findAll({});
      res.status(200).json({ result: medecins });
    } catch (error) {
      res.status(500).json({
        message: "error",
      });
    }
  },
};
