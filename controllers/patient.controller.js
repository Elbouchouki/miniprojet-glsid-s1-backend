const models = require("../models");
const { Sequelize, Op } = require("sequelize");

module.exports = {
  async index(req, res) {
    try {
      const patients = await models.Patient.findAll({});
      res.status(200).json({ result: patients });
    } catch (error) {
      res.status(500).json({
        message: "error",
      });
    }
  },
};
