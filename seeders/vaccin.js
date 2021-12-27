"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Vaccins", [
      {
        nom: "Sinopharm",
        nbrDose: 2,
        ageLimit: 18,
        primarySerie: 28,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
      {
        nom: "Janssen",
        nbrDose: 1,
        ageLimit: 18,
        primarySerie: 0,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
      {
        nom: "Pfizer/BioNTech",
        nbrDose: 2,
        ageLimit: 5,
        primarySerie: 21,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
      {
        nom: "Moderna",
        nbrDose: 2,
        ageLimit: 18,
        primarySerie: 28,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
      {
        nom: "AstraZenca",
        nbrDose: 2,
        ageLimit: 18,
        primarySerie: 48,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Vaccins");
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
