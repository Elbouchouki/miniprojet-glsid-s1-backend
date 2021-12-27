const models = require("../models");
const { Sequelize, Op } = require("sequelize");

module.exports = {
  async index(req, res) {
    try {
      const Ville = await models.Ville.findAll({
        attributes: ["id", "nom", "enabled"],
      });
      res.status(200).json({ result: Ville });
    } catch (error) {
      res.status(500).json({
        message: "error",
      });
    }
  },
  async updateVille(req, res) {
    try {
      const id = req.body.id;
      const enabled = req.body.enabled;

      const chackVille = await models.Ville.findOne({
        where: { id: { [Op.eq]: id } },
      });
      if (!chackVille) {
        res.status(404).json({
          message: "Ville doesn't exist",
        });
        return;
      }
      await models.Ville.update(
        {
          enabled: enabled,
          updatedAt: Sequelize.fn("now"),
        },
        {
          where: { id: { [Op.eq]: id } },
        }
      );
      res.status(200).json({ result: "Ville updated" });
    } catch (error) {
      res.status(500).json({
        message: "error",
      });
    }
  },
};
