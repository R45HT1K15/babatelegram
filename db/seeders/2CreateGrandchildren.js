'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Grandchildren',
      [
        {
          login: 'Polina',
          password: '1234',
          fio: 'Полина ',
        },
        {
          login: 'Kate',
          password: '1234',
          fio: 'Катерина ',
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Grandchildren', null, {});
  },
};
