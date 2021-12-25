const models = require("../models");
const { Sequelize, Op } = require("sequelize");

module.exports = {
  async index(req, res) {
    // try {
    const medecin = await models.Medecin.findAll({});
    res.status(200).json({ result: medecin });
    // } catch (error) {
    //   res.status(500).json({
    //     message: "error",
    //   });
    // }
  },
  async addMedecin(req, res) {
    try {
      const idMedecin = req.body.idMedecin;
      const nom = req.body.nom;
      const prenom = req.body.prenom;
      const telephone = req.body.telephone;
      const adresse = req.body.adresse;
      const centreId = req.body.centreId;
      const userId = req.body.userId;

      const checkidMedecin = await models.Medecin.findOne({
        where: { idMedecin: { [Op.eq]: idMedecin } },
      });
      if (checkidMedecin) {
        res.status(409).json({
          message: "Medecin already exists",
        });
      }
      await models.Medecin.create({
        idMedecin: idMedecin,
        nom: nom,
        prenom: prenom,
        telephone: telephone,
        adresse: adresse,
        centreId: centreId,
        userId: userId,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      });
      res.status(200).json({ result: "Medecin created" });
    } catch {
      res.status(500).json({
        message: "error",
      });
    }
  },
  async updateMedecin(req, res) {
    try {
      const idMedecin = req.body.idMedecin;
      const nom = req.body.nom;
      const prenom = req.body.prenom;
      const telephone = req.body.telephone;
      const adresse = req.body.adresse;
      const centreId = req.body.centreId;
      const userId = req.body.userId;

      const chackMedecin = await models.Medecin.findOne({
        where: { idMedecin: { [Op.eq]: idMedecin } },
      });
      if (!chackMedecin) {
        res.status(404).json({
          message: "Medecin doesn't exist",
        });
        return;
      }
      await models.Medecin.update(
        {
          nom: nom,
          prenom: prenom,
          telephone: telephone,
          adresse: adresse,
          centreId: centreId,
          userId: userId,
          updatedAt: Sequelize.fn("now"),
        },
        {
          where: { idMedecin: { [Op.eq]: idMedecin } },
        }
      );
      res.status(200).json({ result: "Medecin updated" });
    } catch (error) {
      res.status(500).json({
        message: "error",
      });
    }
  },
  async deleteMedecin(req, res) {
    try {
      const idMedecin = req.body.idMedecin;
      await models.Medecin.destroy({
        where: { idMedecin: { [Op.eq]: idMedecin } },
      });
      res.status(202).json({
        result: "Medecin deleted",
      });
    } catch (error) {
      res.status(500).json({
        message: "error",
      });
    }
  },
};
