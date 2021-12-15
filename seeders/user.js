"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        username: "admin",
        email: "admin@mail.com",
        password: "adminpass",
        role: 1,
      },
      {
        username: "medecin",
        email: "medecin@mail.com",
        password: "medecinpass",
        role: 2,
      },
      {
        username: "infirmier",
        email: "infirmier@mail.com",
        password: "infirmierpass",
        role: 3,
      },
      {
        username: "patient",
        email: "patient@mail.com",
        password: "patientpass",
        role: 4,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users");
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
