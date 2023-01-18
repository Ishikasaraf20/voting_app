"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Answer extends Model {

    static associate(models) {
      Answer.belongsTo(models.Question, {
        foreignKey: "questionId",
        onDelete: "cascade",
        onUpdate: "cascade",
        hooks: true,
      });
    }
  }
  Answer.init(
    {
      body: DataTypes.STRING,
      selected: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Answer",
    }
  );
  return Answer;
};
