"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Vaccin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Vaccin.hasMany(models.Dose, { foreignKey: "vaccinId" });
      Vaccin.belongsToMany(models.Patient, {
        through: "Demander",
        as: "patientes",
        foreignKey: "vaccinId",
      });
    }
  }
  Vaccin.init(
    {
      nom: DataTypes.STRING,
      nbrDoses: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Vaccin",
    }
  );
  return Vaccin;
};
