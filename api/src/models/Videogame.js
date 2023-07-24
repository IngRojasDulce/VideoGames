const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Videogame', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id:{
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    description:{
      type: DataTypes.TEXT,
      allowNull: false,
    },
    platforms:{
      // type: DataTypes.STRING, //
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
      defaultValue:[]
    },
    imagen:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    landingDate:{
      type: DataTypes.DATEONLY,// rango de fecha
      allowNull: false,

    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        isFloat: true,
      min: 0, // Valor mínimo permitido es 0
      max: 7, // Valor máximo permitido es 7
      },
    },
    
  },{ freezeTableName: true, timestamps: false });
};
