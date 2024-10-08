"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Points", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
      },
      points: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        defaultValue:Sequelize.fn('NOW'),
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        defaultValue:Sequelize.fn('NOW'),
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Points");
  },
};
