// routes/cursoRoutes.js

const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

// importa o método para verificar a sessão do usuário
const checkSession = require("../helpers/sessao").checkSession;

// Rota para a página de cursos
router.get('/clientes/',checkSession, clienteController.getAllClientes);
router.get('/clientesCreate/',checkSession, clienteController.createCliente);
router.post('/clientesSearch/',checkSession, clienteController.searchClientesByName);
router.get('/clientes/:id',checkSession, clienteController.editCliente);

module.exports = router;
