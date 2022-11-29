'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
   
    static associate(models) {
      
    }
  }
  Like.init({
    picture_id: DataTypes.INTEGER,
    grandparent_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Like',
  });
  return Like;
};