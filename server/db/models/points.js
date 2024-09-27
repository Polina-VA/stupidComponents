"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Points extends Model {
    static associate({User}) {
      this.belongsTo(User, {foreignKey: "userId"})
    }
  }
  Points.init(
    {
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
      },
      points: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "Points",
    }
  );
  return Points;
};
