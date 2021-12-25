"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Centres", [
      {
        nom: "Chbanate",
        adresse: "Rue ibno lkatir",
        capacite: 100,
        enabled: true,
        villeId: 7,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
      {
        nom: "Centre Bab Doukkala",
        adresse: "Bab Doukkala",
        capacite: 100,
        enabled: true,
        villeId: 4,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
      {
        nom: "Centre Hay Mohammadi",
        adresse: "Daoudiate",
        capacite: 100,
        enabled: true,
        villeId: 4,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
      {
        nom: "Centre Kasbah",
        adresse: "Kasbah",
        capacite: 100,
        enabled: true,
        villeId: 14,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
      {
        nom: "CLUB HOURIA",
        adresse: "El bradia",
        capacite: 100,
        enabled: true,
        villeId: 14,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
      {
        nom: "Centre Riad Salam",
        adresse: "Riad Salam",
        capacite: 100,
        enabled: true,
        villeId: 14,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Centres");
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
