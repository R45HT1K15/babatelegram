'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Grandparents',
      [
        {
          login: 'Anji',
          password: '$2b$10$YEMVGm2jvbg8M4P2VhUpJOihByPy9m1bProLSt/mDkiqW.lpW9Yqa',
          fio: 'Афанасьева Тамара Ивановна',
          help: true,
        },
        {
          login: 'Filla',
          password: '$2b$10$YEMVGm2jvbg8M4P2VhUpJOihByPy9m1bProLSt/mDkiqW.lpW9Yqa',
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
