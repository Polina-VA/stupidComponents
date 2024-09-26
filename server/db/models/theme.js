"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Theme extends Model {
    static associate({Question}) {
      this.belongsTo(Question, {foreignKey: "themeId"})
    }
  }
  Theme.init(
    {
      title: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Theme",
    }
  );
  return Theme;
};
