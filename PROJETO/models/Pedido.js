const { DataTypes } = require('sequelize')
const db = require ('../db/conn')
const Produto = require('./Produto')
const Cliente = require('./Cliente')

const Pedido = db.define('Pedido', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    
    idCliente: {
        type: DataTypes.INTEGER,
        autoIncrement: false,
        allowNull: false,
        references:{
            model: Cliente,
            key: 'id'
        }

    },
    idProduto: {
        type: DataTypes.INTEGER,
        autoIncrement: false,
        allowNull: false,
        references:{
            model: Produto,
            key: 'id'
        }
    }
    

})
module.exports = Pedido