"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Points",
      [
        {
          userId: 1,
          points: 400,
        },
        {
          userId: 2,
          points: 600,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Points", null, {});
  },
};
