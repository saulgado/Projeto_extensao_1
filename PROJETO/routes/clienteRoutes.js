const express = require('express')
const router = express.Router()
const ClienteController = require('../controllers/clienteController')

router.get('/cd_cliente',ClienteController.cadastrarCliente)
router.post('/cd_cliente',ClienteController.cadastrarClientePost)
router.get('/',ClienteController.mostrarClientes)
router.post('/remover', ClienteController.removeCliente)
router.get('/editar/:id', ClienteController.atualizarCliente)
router.post('/editar', ClienteController.atualizarClientePost)

module.exports = router