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
  async addInfirmier(req, res) {
    try {
      const idInfirmier = req.body.idInfirmier;
      const nom = req.body.nom;
      const prenom = req.body.prenom;
      const telephone = req.body.telephone;
      const adresse = req.body.adresse;
      const medecinId = req.body.medecinId;
      const centreId = req.body.centreId;
      const userId = req.body.userId;

      const checkIdInfirmier = await models.Infirmier.findOne({
        where: { idInfirmier: { [Op.eq]: idInfirmier } },
      });
      if (checkIdInfirmier) {
        res.status(409).json({
          message: "Infirmier already exists",
        });
      }
      await models.User.create({
        idInfirmier: idInfirmier,
        nom: nom,
        prenom: prenom,
        telephone: telephone,
        adresse: adresse,
        medecinId: medecinId,
        centreId: centreId,
        userId: userId,
      });
      res.status(200).json({ result: "Infirmier created" });
    } catch {
      res.status(500).json({
        message: "error",
      });
    }
  },
  async updateInfirmier(req, res) {
    try {
      const idInfirmier = req.body.idInfirmier;
      const nom = req.body.nom;
      const prenom = req.body.prenom;
      const telephone = req.body.telephone;
      const adresse = req.body.adresse;
      const medecinId = req.body.medecinId;
      const centreId = req.body.centreId;
      const userId = req.body.userId;

      const chackInfirmier = await models.Infirmier.findOne({
        where: { idInfirmier: { [Op.eq]: idInfirmier } },
      });
      if (!chackInfirmier) {
        res.status(404).json({
          message: "Infirmier doesn't exist",
        });
        return;
      }
      await models.Infirmier.update(
        {
          nom: nom,
          prenom: prenom,
          telephone: telephone,
          adresse: adresse,
          medecinId: medecinId,
          centreId: centreId,
          userId: userId,
        },
        {
          where: { idInfirmier: { [Op.eq]: idInfirmier } },
        }
      );
      res.status(200).json({ result: "Infirmier updated" });
    } catch (error) {
      res.status(500).json({
        message: "error",
      });
    }
  },
  async deleteInfirmier(req, res) {
    try {
      const idInfirmier = req.body.idInfirmier;
      await models.Infirmier.destroy({
        where: { idInfirmier: { [Op.eq]: idInfirmier } },
      });
      res.status(202).json({
        result: "Infirmier deleted",
      });
    } catch (error) {
      res.status(500).json({
        message: "error",
      });
    }
  },
};
