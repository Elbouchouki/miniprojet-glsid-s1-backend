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
      // 1
      {
        username: "medecin1",
        email: "medecin1@mail.com",
        password: "medecin1pass",
        role: 2,
      },
      // 2
      {
        username: "medecin2",
        email: "medecin2@mail.com",
        password: "medecin2pass",
        role: 2,
      },
      // 3
      {
        username: "medecin3",
        email: "medecin3@mail.com",
        password: "medecin3pass",
        role: 2,
      },
      // 4
      {
        username: "infirmier1",
        email: "infirmier1@mail.com",
        password: "infirmier1pass",
        role: 3,
      },
      // 5
      {
        username: "infirmier2",
        email: "infirmier2@mail.com",
        password: "infirmier2pass",
        role: 3,
      },
      // 6
      {
        username: "infirmier3",
        email: "infirmier3@mail.com",
        password: "infirmier3pass",
        role: 3,
      },
      // 7
      {
        username: "patient1",
        email: "patient1@mail.com",
        password: "patient1pass",
        role: 4,
      },
      // 8
      {
        username: "patient2",
        email: "patient2@mail.com",
        password: "patient2pass",
        role: 4,
      },
      // 9
      {
        username: "patient3",
        email: "patient3@mail.com",
        password: "patient3pass",
        role: 4,
      },
      // 10
      {
        username: "patient4",
        email: "patient4@mail.com",
        password: "patient4pass",
        role: 4,
      },
      // 11
      {
        username: "patient5",
        email: "patient5@mail.com",
        password: "patient5pass",
        role: 4,
      },
      // 12
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
