"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Demander extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Demander.belongsTo(models.Centre, { foreignKey: "centreId" });
    }
  }
  Demander.init(
    {
      dateDemande: DataTypes.DATE,
      numDose: DataTypes.INTEGER,
      vaccinId: DataTypes.INTEGER,
      patientId: DataTypes.INTEGER,
      centreId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Demander",
    }
  );
  return Demander;
};
