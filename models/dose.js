"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Dose extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Dose.belongsTo(models.Vaccin, { foreignKey: "vaccinId" });
      Dose.belongsTo(models.Infirmier, { foreignKey: "infirmierId" });
      Dose.belongsTo(models.Centre, { foreignKey: "centreId" });
      Dose.belongsTo(models.Patient, { foreignKey: "patientId" });
    }
  }
  Dose.init(
    {
      dateDose: DataTypes.DATE,
      patientId: DataTypes.STRING,
      infirmierId: DataTypes.STRING,
      vaccinId: DataTypes.INTEGER,
      centreId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Dose",
    }
  );
  return Dose;
};
