'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Picture extends Model {
    static associate({ Grandparent }) {
      Picture.belongsToMany(Picture, {
        through: Like,
        foreignKey: 'picture_id',
        otherKey: 'grandparent_id',
      });
    }
  }
  Picture.init(
    {
      url: DataTypes.TEXT,
      grandparent_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Picture',
    }
  );
  return Picture;
};
