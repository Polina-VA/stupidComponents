"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Ростик",
          email: "rost@mail.com",
          password: await bcrypt.hash("123", 10),

        },
        {
          name: "Наташа",
          email: "nata@mail.com",
          password: await bcrypt.hash("123", 10),

        },
        {
          name: "Артур",
          email: "art@mail.com",
          password: await bcrypt.hash("123", 10),

        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
