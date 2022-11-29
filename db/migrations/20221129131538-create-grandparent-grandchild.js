'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Grandparent_grandchildren', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      grandparent_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Grandparents',
          key: 'id',
        },
      },
      grandchild_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Grandchildren',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Grandparent_grandchildren');
  },
};
