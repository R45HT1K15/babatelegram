'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Grandchild extends Model {
    static associate({ Grandparent, Grandparent_grandchild }) {
      Grandchild.belongsToMany(Grandparent, {
        through: Grandparent_grandchild,
        foreignKey: 'grandchild_id',
        otherKey: 'grandparent_id',
      });
    }
  }
  Grandchild.init(
    {
      login: {
        type: DataTypes.STRING,
        validate: {
          is: /^[a-z0-9]+$/i,
        },
      },

      password: DataTypes.STRING,
      fio: {
        type: DataTypes.STRING,
        validate: {
          not: /^[0-9]+$/i,
        },
      },
    },
    {
      sequelize,
      modelName: 'Grandchild',
    }
  );
  return Grandchild;
};
