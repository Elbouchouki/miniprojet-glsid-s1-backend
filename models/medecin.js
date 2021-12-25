"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Medecin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Medecin.belongsTo(models.User, { foreignKey: "userId" });
      Medecin.belongsTo(models.Centre, { foreignKey: "centreId" });
      Medecin.hasMany(models.Patient, { foreignKey: "medecinId" });
      Medecin.hasMany(models.Infirmier, { foreignKey: "infirmierId" });
    }
  }
  Medecin.init(
    {
      idMedecin: DataTypes.STRING,
      nom: DataTypes.STRING,
      prenom: DataTypes.STRING,
      telephone: DataTypes.STRING,
      adresse: DataTypes.STRING,
      centreId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Medecin",
    }
  );
  return Medecin;
};
