const express = require('express')
const router = express.Router()
const pedidosController = require('../controllers/pedidosController')

router.get('/cd_pedido',pedidosController.cadastrarPedido)
router.post('/cd_pedido',pedidosController.cadastrarPedidoPost)
router.get('/',pedidosController.mostrarPedidos)
router.post('/remover', pedidosController.removePedido)
router.get('/editar/:id', pedidosController.atualizarPedido)
router.post('/editar', pedidosController.atualizarPedidoPost)

module.exports = router