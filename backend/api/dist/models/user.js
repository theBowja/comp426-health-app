'use strict';

module.exports = function (sequelize, DataTypes) {
  var user = sequelize.define('user', {
    _id: {
      type: DataTypes.STRING(14),
      primaryKey: true
    },
    created: DataTypes.DATE,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    birthdate: DataTypes.DATEONLY,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    height: DataTypes.INTEGER,
    unit: DataTypes.ENUM('imperial', 'metric')
  }, {
    freezeTableName: true
  });
  return user;
};