const models = require("../models");
const { Sequelize, Op } = require("sequelize");
const jwt = require("jsonwebtoken");
const userController = require("./user.controller");
const patientController = require("./patient.controller");

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
        include: [
          {
            model: models.Role,
            nested: true,
          },
        ],
      });
      if (user) {
        const token = generateAcessToken(username, user.Role?.role_name);
        res.status(200).json({
          user: {
            id: user.id,
            username: user.username,
            email: user.email,
            role: {
              id: user.Role?.id,
              name: user.Role?.role_name,
            },
          },
          token,
        });
      }
      res.status(404).json("username or pass incorrect");
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async signup(req, res) {
    try {
      const username = req.body.username;
      const email = req.body.email;
      const password = req.body.password;
      const role = req.body.role;
      const identifient = req.body.identifient;
      const nom = req.body.nom;
      const prenom = req.body.prenom;
      const telephone = req.body.telephone;
      const adresse = req.body.adresse;
      const dateNaissance = req.body.dateNaissance;
      const infirmierId = req.body.infirmierId;
      const medecinId = req.body.medecinId;
      const malade = req.body.malade;
      console.log(username, password, adresse, telephone);
      const checkUsername = await models.User.findOne({
        where: { username: { [Op.eq]: username } },
      });
      if (checkUsername) {
        res.status(409).json({
          message: "user already exists",
        });
        return;
      }
      const checkEmail = await models.User.findOne({
        where: { email: { [Op.eq]: email } },
      });
      if (checkEmail) {
        res.status(409).json({
          message: "email already exists",
        });
        return;
      }
      const checkIdentifient = await models.Patient.findOne({
        where: { identifient: { [Op.eq]: identifient } },
      });
      if (checkIdentifient) {
        res.status(409).json({
          message: "Patient already exists",
        });
      }
      const user = await models.User.create({
        username: username,
        email: email,
        password: password,
        role: role,
      });
      const patient = await models.Patient.create({
        identifient: identifient,
        nom: nom,
        prenom: prenom,
        telephone: telephone,
        adresse: adresse,
        dateNaissance: dateNaissance,
        infirmierId: infirmierId || null,
        medecinId: medecinId || null,
        malade: malade,
        userId: user.id,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      });
      res.status(201).json({
        user: user,
        patient: patient,
      });
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async getUser(req, res) {
    try {
      const username = req.user.username;
      const user = await models.User.findOne({
        where: {
          username: { [Op.eq]: username },
        },
        include: [
          {
            model: models.Role,
            nested: true,
          },
        ],
      });
      if (user) {
        res.status(200).json({
          user: {
            username: user.username,
            email: user.email,
            role: {
              id: user.Role?.id,
              name: user.Role?.role_name,
            },
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
