// routes/numeroRoutes.js

const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');
const checkToken = require('../helpers/check-token')

// Rota para criar um novo número
router.post('/clientes',checkToken, clienteController.createCliente);

// Rota para listar todos os números
router.get('/clientes', clienteController.getAllClientes);

// Rota para buscar um número por título
router.get('/clientes/search', clienteController.searchClientesByName);

// Rota para buscar um número por ID
router.get('/clientes/:id', clienteController.getClienteById);

// Rota para atualizar um número
router.put('/clientes/:id',checkToken, clienteController.updateCliente);

// Rota para excluir um número por ID
router.delete('/clientes/:id',checkToken, clienteController.deleteCliente);

module.exports = router;
