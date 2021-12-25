"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Infirmiers", [
      {
        idInfirmier: "idInfirmier1",
        nom: "infirmier1Nom",
        prenom: "infirmier1Prenom",
        telephone: "0606060606",
        adresse: "adresse infirmier 1",
        centreId: 1,
        medecinId: "idMedecin1",
        userId: 5,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
      {
        idInfirmier: "idInfirmier2",
        nom: "infirmier2Nom",
        prenom: "infirmier2Prenom",
        telephone: "0606060606",
        adresse: "adresse infirmier 2",
        centreId: 2,
        medecinId: "idMedecin2",
        userId: 6,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
      {
        idInfirmier: "idInfirmier3",
        nom: "infirmier3Nom",
        prenom: "infirmier3Prenom",
        telephone: "0606060606",
        adresse: "adresse infirmier 3",
        centreId: 1,
        medecinId: "idMedecin1",
        userId: 7,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Infirmiers");
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
