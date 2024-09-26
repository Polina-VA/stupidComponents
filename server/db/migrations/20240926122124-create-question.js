'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Questions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      themeId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Themes",
          key: "id"
        }
      },
      question: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      answer: {
        allowNull: false,
        type: Sequelize.STRING
      },
      image: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      point: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        defaultValue:Sequelize.fn('NOW'),
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        defaultValue:Sequelize.fn('NOW'),
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Questions');
  }
};