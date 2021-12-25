"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Infirmier extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Infirmier.belongsTo(models.Medecin, { foreignKey: "medecinId" });
      Infirmier.belongsTo(models.Centre, { foreignKey: "centreId" });
      Infirmier.belongsTo(models.User, { foreignKey: "userId" });
      Infirmier.hasMany(models.Dose, { foreignKey: "infirmierId" });
      Infirmier.hasMany(models.Patient, { foreignKey: "infirmierId" });
    }
  }
  Infirmier.init(
    {
      idInfirmier: DataTypes.STRING,
      nom: DataTypes.STRING,
      prenom: DataTypes.STRING,
      telephone: DataTypes.STRING,
      adresse: DataTypes.STRING,
      medecinId: DataTypes.STRING,
      centreId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Infirmier",
    }
  );
  return Infirmier;
};
