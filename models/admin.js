"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {

    static associate(models) {
      Admin.hasMany(models.Election, {
        foreignKey: "adminId",
        onDelete: "cascade",
        onUpdate: "cascade",
        hooks: true,
      });
      // define association here
    }
  }
  Admin.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Admin",
    }
  );
  return Admin;
};
