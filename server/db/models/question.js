"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate({Theme}) {
      this.belongsTo(Theme, {foreignKey: "themeId"})
    }
  }
  Question.init(
    {
      themeId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Themes",
          key: "id",
        },
      },
      question: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      answer: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      image: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      point: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "Question",
    }
  );
  return Question;
};
