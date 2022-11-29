'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Grandparent extends Model {
    static associate(Grandchild, Grandparent_grandchild, Picture) {
      Grandparent.belongsToMany(Grandchild, {
        through: Grandparent_grandchild,
        foreignKey: 'grandparent_id',
        otherKey: 'grandchild_id',
      });
      Grandparent.hasMany(Picture, {
        foreignKey: 'grandparent_id',
      });
      Grandparent.belongsToMany(Picture, {
        through: Like,
        foreignKey: 'grandparent_id',
        otherKey: 'picture_id',
      });
    }
  }
  Grandparent.init(
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
      help: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Grandparent',
    }
  );
  return Grandparent;
};
