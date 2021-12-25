"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Patient.belongsTo(models.User, { foreignKey: "userId" });
      Patient.belongsTo(models.Medecin, { foreignKey: "medecinId" });
      Patient.belongsTo(models.Infirmier, { foreignKey: "infirmierId" });
      Patient.hasMany(models.Dose, { foreignKey: "patientId" });
      Patient.belongsToMany(models.Vaccin, {
        through: "Demander",
        as: "demandes",
        foreignKey: "patientId",
      });
    }
  }
  Patient.init(
    {
      identifient: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      nom: DataTypes.STRING,
      prenom: DataTypes.STRING,
      adresse: DataTypes.STRING,
      telephone: DataTypes.STRING,
      dateNaissance: DataTypes.DATEONLY,
      malade: DataTypes.BOOLEAN,
      infirmierId: DataTypes.STRING,
      medecinId: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Patient",
    }
  );
  return Patient;
};
