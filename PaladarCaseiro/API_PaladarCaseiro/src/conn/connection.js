const { Sequelize } = require('sequelize')

//Use os dados que você recebeu no email
const sequelize = new Sequelize('restaurante', 'root', 'Saul96967667', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});


  module.exports = sequelize