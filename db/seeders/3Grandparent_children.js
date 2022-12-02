'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Grandparent_grandchildren',
      [
        {
          grandparent_id: 1,
          grandchild_id: 2,
        },
        {
          grandparent_id: 1,
          grandchild_id: 2,
        },
        {
          grandparent_id: 1,
          grandchild_id: 3,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Grandparent_grandchildren', null, {});
  },
};
