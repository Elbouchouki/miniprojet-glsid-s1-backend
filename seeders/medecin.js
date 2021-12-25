"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Medecins", [
      {
        idMedecin: "idMedecin1",
        nom: "medecin1Nom",
        prenom: "medecin1Prenom",
        telephone: "0606060606",
        adresse: "adresse  medecin 1",
        centreId: 1,
        userId: 2,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
      {
        idMedecin: "idMedecin2",
        nom: "medecin2Nom",
        prenom: "medecin2Prenom",
        telephone: "0606060606",
        adresse: "adresse  medecin 2",
        centreId: 2,
        userId: 3,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
      {
        idMedecin: "idMedecin3",
        nom: "medecin3Nom",
        prenom: "medecin3Prenom",
        telephone: "0606060606",
        adresse: "adresse  medecin 3",
        centreId: 3,
        userId: 4,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Medecins");
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
