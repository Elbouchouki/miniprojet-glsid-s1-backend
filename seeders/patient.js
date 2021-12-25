"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Patients", [
      {
        identifient: "identifient1",
        nom: "patient1Nom",
        prenom: "patient1Prenom",
        telephone: "0606060606",
        adresse: "adresse patient 1",
        infirmierId: "idInfirmier1",
        medecinId: null,
        malade: false,
        userId: 8,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
      {
        identifient: "identifient2",
        nom: "patient2Nom",
        prenom: "patient2Prenom",
        telephone: "0606060606",
        adresse: "adresse patient 2",
        infirmierId: "idInfirmier2",
        medecinId: null,
        malade: false,
        userId: 9,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
      {
        identifient: "identifient3",
        nom: "patient3Nom",
        prenom: "patient3Prenom",
        telephone: "0606060606",
        adresse: "adresse patient 3",
        infirmierId: "idInfirmier1",
        medecinId: "idMedecin1",
        malade: true,
        userId: 10,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
      {
        identifient: "identifient4",
        nom: "patient4Nom",
        prenom: "patient4Prenom",
        telephone: "0606060606",
        adresse: "adresse patient 4",
        infirmierId: "idInfirmier3",
        medecinId: null,
        malade: false,
        userId: 11,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
      {
        identifient: "identifient5",
        nom: "patient5Nom",
        prenom: "patient5Prenom",
        telephone: "0606060606",
        adresse: "adresse patient 5",
        infirmierId: "idInfirmier2",
        medecinId: "idMedecin2",
        malade: true,
        userId: 12,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Patients");
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
