'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Grandparents',
      [
        {
          login: 'Anji',
          password: '1234',
          fio: 'Афанасьева Тамара Ивановна',
          help: true,
        },
        {
          login: 'Filla',
          password: '1234',
          fio: 'Киркоров Филипп Васильевич',
          help: true,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Grandparents', null, {});
  },
};
