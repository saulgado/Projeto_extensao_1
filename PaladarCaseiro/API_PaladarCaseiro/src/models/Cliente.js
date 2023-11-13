// models/Curso.js

const { DataTypes } = require('sequelize');
const sequelize = require('../conn/connection');

const Cliente = sequelize.define('Cliente', {
  nome: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  celular: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  cpf: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  ordem: {
    type: DataTypes.INTEGER(2),
    allowNull: false,
  },
});

module.exports = Cliente;
