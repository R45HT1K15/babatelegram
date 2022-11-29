'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Pictures',
      [
        {
          url: '/img/javascript.png',
          grandparent_id: 1,
        },
        {
          url: '/img/блины.png',
          grandparent_id: 1,
        },
        {
          url: '/img/оливье.png',
          grandparent_id: 1,
        },
        {
          url: '/img/чипсеки.png',
          grandparent_id: 2,
        },
        {
          url: '/img/js.png',
          grandparent_id: 2,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Pictures', null, {});
  },
};
