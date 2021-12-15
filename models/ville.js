"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Ville extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Ville.hasMany(models.Centre, { foreignKey: "villeId" });
    }
  }
  Ville.init(
    {
      nom: DataTypes.STRING,
      enabled: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Ville",
    }
  );
  return Ville;
};
