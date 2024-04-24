const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('console', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(15),
      allowNull:false
    }
  },{timestamps:false});
};