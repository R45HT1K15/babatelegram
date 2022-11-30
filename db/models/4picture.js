'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Picture extends Model {
    static associate({ Grandparent, Like }) {
      Picture.belongsTo(Grandparent, { foreignKey: 'grandparent_id' });
      Picture.belongsToMany(Grandparent, {
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
      countLike: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Picture',
    }
  );
  return Picture;
};
