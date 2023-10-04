const { DataTypes } = require('sequelize')
const db = require ('../db/conn')

const Cliente = db.define('Cliente', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    
    nome : {
        type : DataTypes.STRING,
        allowNull : false
    },
    celular : {
        type : DataTypes.STRING,
        allowNull : false
    },
    email : {
        type : DataTypes.STRING,
        allowNull : false
    },
    cpf : {
        type : DataTypes.STRING,
        allowNull : false
    }

})
module.exports = Cliente