const { DataTypes } = require('sequelize')
const db = require ('../db/conn')

const Login = db.define('Login', {
    username : {
        type : DataTypes.STRING,
        allowNull : false
    },
    password : {
        type : DataTypes.STRING,
        allowNull : false
    }

})
module.exports = Login