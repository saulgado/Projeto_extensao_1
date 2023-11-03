const { DataTypes } = require('sequelize')
const db = require ('../db/conn')

const Produto = db.define('Produto', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nome : {
        type : DataTypes.STRING,
        allowNull : false
    },
    valor : {
        type : DataTypes.STRING,
        allowNull : false
    },
    tipo : {
        type : DataTypes.STRING,
        allowNull : false
    }
})
module.exports = Produto