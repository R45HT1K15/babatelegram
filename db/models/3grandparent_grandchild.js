'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Grandparent_grandchild extends Model {
    static associate({}) {}
  }
  Grandparent_grandchild.init(
    {
      grandparent_id: DataTypes.INTEGER,
      grandchild_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Grandparent_grandchild',
    }
  );
  return Grandparent_grandchild;
};
