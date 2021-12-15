"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Centre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Centre.belongsTo(models.Ville, { foreignKey: "villeId" });
      Centre.hasMany(models.Medecin, { foreignKey: "centreId" });
      Centre.hasMany(models.Infirmier, { foreignKey: "centreId" });
      Centre.hasMany(models.Dose, { foreignKey: "centreId" });
      Centre.hasMany(models.Demander, { foreignKey: "centreId" });
    }
  }
  Centre.init(
    {
      nom: DataTypes.STRING,
      adresse: DataTypes.STRING,
      capacite: DataTypes.INTEGER,
      enabled: DataTypes.BOOLEAN,
      villeId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Centre",
    }
  );
  return Centre;
};
