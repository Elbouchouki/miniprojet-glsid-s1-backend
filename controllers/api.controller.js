const models = require("../models");
const { Sequelize, Op } = require("sequelize");

module.exports = {
  async index(req, res) {
    try {
      res.status(200).json({
        API: "Mini project vaccination",
        method: "GET",
        Equipe: "GLSID-IIBDCC",
        Fatiza: "-",
        Yassine: "-",
        Najwa: "-",
        Ahmed: "-",
      });
    } catch (error) {
      res.status(500).json({
        message: "error",
      });
    }
  },
  async testPost(req, res) {
    try {
      res.status(200).json({
        API: "Mini project vaccination",
        method: "POST",
        Equipe: "GLSID-IIBDCC",
        Fatiza: "-",
        Yassine: "-",
        Najwa: "-",
        Ahmed: "-",
      });
    } catch (error) {
      res.status(500).json({
        message: "error",
      });
    }
  },
};
