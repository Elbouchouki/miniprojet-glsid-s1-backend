const models = require("../models");
const { Sequelize, Op } = require("sequelize");

module.exports = {
  async index(req, res) {
    try {
      const Patient = await models.Patient.findAll({});
      res.status(200).json({ result: Patient });
    } catch (error) {
      res.status(500).json({
        message: "error",
      });
    }
  },
  async addPatient(req, res) {
    try {
      const identifient = req.body.identifient;
      const nom = req.body.nom;
      const prenom = req.body.prenom;
      const telephone = req.body.telephone;
      const adresse = req.body.adresse;
      const dateNaissance = req.body.dateNaissance;
      const centreId = req.body.centreId;
      const infirmierId = req.body.infirmierId;
      const medecinId = req.body.medecinId;
      const malade = req.body.malade;
      const userId = req.body.userId;

      const checkIdentifient = await models.Patient.findOne({
        where: { identifient: { [Op.eq]: identifient } },
      });
      if (checkIdentifient) {
        res.status(409).json({
          message: "Patient already exists",
        });
      }
      await models.Patient.create({
        identifient: identifient,
        nom: nom,
        prenom: prenom,
        telephone: telephone,
        adresse: adresse,
        dateNaissance: dateNaissance,
        centreId: centreId,
        infirmierId: infirmierId,
        medecinId: medecinId,
        malade: malade,
        userId: userId,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      });
      res.status(200).json({ result: "Patient created" });
    } catch {
      res.status(500).json({
        message: "error",
      });
    }
  },
  async updatePatient(req, res) {
    try {
      const identifient = req.body.identifient;
      const nom = req.body.nom;
      const prenom = req.body.prenom;
      const telephone = req.body.telephone;
      const adresse = req.body.adresse;
      const dateNaissance = req.body.dateNaissance;
      const centreId = req.body.centreId;
      const infirmierId = req.body.infirmierId;
      const medecinId = req.body.medecinId;
      const malade = req.body.malade;
      const userId = req.body.userId;

      const chackPatient = await models.Patient.findOne({
        where: { identifient: { [Op.eq]: identifient } },
      });
      if (!chackPatient) {
        res.status(404).json({
          message: "Patient doesn't exist",
        });
        return;
      }
      await models.Patient.update(
        {
          nom: nom,
          prenom: prenom,
          telephone: telephone,
          adresse: adresse,
          dateNaissance: dateNaissance,
          centreId: centreId,
          infirmierId: infirmierId,
          medecinId: medecinId,
          malade: malade,
          userId: userId,
          updatedAt: Sequelize.fn("now"),
        },
        {
          where: { identifient: { [Op.eq]: identifient } },
        }
      );
      res.status(200).json({ result: "Patient updated" });
    } catch (error) {
      res.status(500).json({
        message: "error",
      });
    }
  },
  async deletePatient(req, res) {
    try {
      const identifient = req.body.identifient;
      await models.Patient.destroy({
        where: { identifient: { [Op.eq]: identifient } },
      });
      res.status(202).json({
        result: "Patient deleted",
      });
    } catch (error) {
      res.status(500).json({
        message: "error",
      });
    }
  },
};
