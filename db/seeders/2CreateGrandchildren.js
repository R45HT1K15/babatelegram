'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Grandchildren',
      [
        {
          login: 'Polina',
          password:
            '$2b$10$./AH8JaYbQAh/ec7BObit.Ff2ndozbuUfIvZQe1Y6uJKmw0GGF3V2',
          fio: 'Полинка',
        },
        {
          login: 'Kate',
          password:
            '$2b$10$./AH8JaYbQAh/ec7BObit.Ff2ndozbuUfIvZQe1Y6uJKmw0GGF3V2',
          fio: 'Катерина',
        },
        {
          login: 'Pavel',
          password:
            '$2b$10$./AH8JaYbQAh/ec7BObit.Ff2ndozbuUfIvZQe1Y6uJKmw0GGF3V2',
          fio: 'Павлушка-хохотушка ',
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Grandchildren', null, {});
  },
};
