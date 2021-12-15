'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Doses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dateDose: {
        type: Sequelize.DATE
      },
      patientId: {
        type: Sequelize.STRING
      },
      infirmierId: {
        type: Sequelize.INTEGER
      },
      vaccinId: {
        type: Sequelize.INTEGER
      },
      centreId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Doses');
  }
};