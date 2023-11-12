const express = require('express')
const router = express.Router()
const LoginController = require('../controllers/loginController')

router.get('/cd_login',LoginController.cadastrarLogin)
router.post('/cd_login',LoginController.cadastrarLoginPost)
router.get('/',LoginController.rederizarPaginaTabela)
router.get('/JSON',LoginController.mostrarLogins)
router.post('/remover', LoginController.removeLogin)
router.get('/editar/:id', LoginController.atualizarLogin)
router.post('/editar', LoginController.atualizarLoginPost)

module.exports = router