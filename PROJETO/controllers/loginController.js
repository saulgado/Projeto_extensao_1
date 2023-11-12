const Login = require('../models/Login')

module.exports = class LoginController {

    //Método que mostra o formulário de cadastrar login
    static cadastrarLogin(req, res) {
        res.render('login/cd_login')
    }

    //Método que recebe os dados do form e salva no bd
    static async cadastrarLoginPost(req, res) {
        const login = {
            username: req.body.username,
            password: req.body.password,
            rol: req.body.rol
        }
        console.log(login)
        await Login.create(login)
            .then(() => { res.redirect('/login') })
            .catch((err) => console.log('Erro ao cadastrar login' + err))
    }

    //Método que lista os produtos do banco
    static mostrarLogins(req, res) {
        Login.findAll({ raw: true })
            .then((data) => {
                let nenhumLogin = false
                if (data.length === 0) {
                    nenhumLogin = true
                }
                return res.status(200).json({ login: data, nenhumLogin }) 
            }).catch((err) => console.log(err))
    }
    static rederizarPaginaTabela(req, res) {
        return res.render('login/login')
    }

    //Método para excluir um produto no banco de dados
    static async removeLogin(req, res) {
        const id = req.body.id
        console.log(req)
        res.status(200).json(await Login.destroy({ where: { id } }))
    }

    //Método para apresentar o formulário de alteração de um produto
    static atualizarLogin(req, res) {
        const vid = req.params.id  
    
        Login.findOne({ where: { id: vid }, raw: true })
            .then((login) => {
                if (login) {
                    return res.status(200).render('logins/editar', { login }) 
                } 
            })
            .catch((error) => {
                console.error('Erro ao buscar login do banco de dados:', error) 
                return res.status(500).send('Erro interno do servidor') 
            }) 
    }
    

    //Método que recebe os dados alterados do form e faz o update no BD
    static async atualizarLoginPost(req, res) {
        const vid = req.body.id
        const login = {
            id: req.body.id,
            nome: req.body.nome,
            celular: req.body.numero_cell,
            email: req.body.email,
            cpf: req.body.cpf
        }
        console.log(login)
        await Login.update(login, { where: { id: vid } })
            .then(() => { res.redirect('/login') })
            .catch((err) => console.log(err))
    }
}