const models = require("../models");
const { Sequelize, Op } = require("sequelize");

module.exports = {
  async index(req, res) {
    try {
      const demandes = await models.Demande.findAll({});
      res.status(200).json({ result: demandes });
    } catch (error) {
      res.status(500).json({
        message: "error",
      });
    }
  },
};
