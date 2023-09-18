const express = require('express')
const router = express.Router()
const ProdutoController = require('../controllers/produtoController')

router.get('/cd_produto',ProdutoController.cadastrarProduto)
router.post('/cd_produto',ProdutoController.cadastrarProdutoPost)
router.get('/',ProdutoController.mostrarProdutos)
router.post('/remover', ProdutoController.removeProduto)
router.get('/editar/:id', ProdutoController.atualizarProduto)
router.post('/editar', ProdutoController.atualizarProdutoPost)

module.exports = router