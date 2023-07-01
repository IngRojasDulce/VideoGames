const {DataTypes, Sequelize} =require('sequelize');

module.exports= (Sequelize)=>{
    //defino el modelo Genre
    Sequelize.define('Genre',{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type:DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                  args: [2, 15],
                  msg: "El nombre debe contener entre 5 y 10 caracteres",
                },
              },
        }
    },{ freezeTableName: true, timestamps: false })
}