const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

const platforms = ['unknown','PC','PS4', 'PS3', 'PS2', 'PS', 'Wii', 'Xbox', 'Xbox 360', 'Xbox One', 'Xbox Series X/S'];

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id:{
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    description:{
      type: DataTypes.STRING,
      allowNull: false
    },
    launch_date:{
      type: DataTypes.DATEONLY,
    },
    rating:{
      type: DataTypes.INTEGER,
      validate: {
        max: 10,
        min:-1,
      }
    },
    bg_image:{
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {timestamps: false});
};
