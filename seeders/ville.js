"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Villes", [
      {
        nom: "Casablanca",
        enabled: true,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
      {
        nom: "Fes",
        enabled: true,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
      {
        nom: "Tanger",
        enabled: true,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
      {
        nom: "Rabat",
        enabled: true,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
      {
        nom: "Oujda",
        enabled: true,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
      {
        nom: "Kenitra",
        enabled: true,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
      {
        nom: "Agadir",
        enabled: true,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
      {
        nom: "Tetouan",
        enabled: true,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
      {
        nom: "Temara",
        enabled: true,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
      {
        nom: "Safi",
        enabled: true,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
      {
        nom: "Mohammedia",
        enabled: true,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
      {
        nom: "Khouribga",
        enabled: true,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
      {
        nom: "El Jadida",
        enabled: true,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
      {
        nom: "Beni Mellal",
        enabled: true,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
      {
        nom: "Nador",
        enabled: true,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
      {
        nom: "Dar Bouazza",
        enabled: true,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
      {
        nom: "Taza",
        enabled: true,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
      {
        nom: "Settat",
        enabled: true,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
      {
        nom: "Berrechid",
        enabled: true,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
      {
        nom: "Khemisset",
        enabled: true,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
      {
        nom: "Inezgane",
        enabled: true,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Villes");
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
