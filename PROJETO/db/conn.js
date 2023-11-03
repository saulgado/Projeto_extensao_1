const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('restaurante','vlad','bigbem123',{
    host:'localhost',
    dialect : 'mysql',
    port : 3306
})

try{
    sequelize.authenticate()
    console.log('Conectado com o BD')
} catch (error) {
    console.log('Erro ao conectar com o BD: ',error)
}
module.exports = sequelize