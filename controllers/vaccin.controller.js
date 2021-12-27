const models = require("../models");
const { Sequelize, Op } = require("sequelize");

module.exports = {
  async index(req, res) {
    try {
      const Vaccin = await models.Vaccin.findAll({
        attributes: ["id", "nom", "nbrDose", "ageLimit", "primarySerie"],
      });
      res.status(200).json({ result: Vaccin });
    } catch (error) {
      res.status(500).json({
        message: "error",
      });
    }
  },
  async updateVaccin(req, res) {
    try {
      const id = req.body.id;
      const nom = req.body.nom;
      const nbrDoses = req.body.nbrDoses;
      const ageLimit = req.body.ageLimit;
      const primarySerie = req.body.primarySerie;

      const chackVaccin = await models.Vaccin.findOne({
        where: { id: { [Op.eq]: id } },
      });
      if (!chackVaccin) {
        res.status(404).json({
          message: "Vaccin doesn't exist",
        });
        return;
      }
      await models.Vaccin.update(
        {
          nom: nom,
          nbrDoses: nbrDoses,
          ageLimit: ageLimit,
          primarySerie: primarySerie,
        },
        {
          where: { id: { [Op.eq]: id } },
        }
      );
      res.status(200).json({ result: "Vaccin updated" });
    } catch (error) {
      res.status(500).json({
        message: "error",
      });
    }
  },
};
