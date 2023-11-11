const Cliente = require('../models/Cliente')

module.exports = class ClienteController {

    //Método que mostra o formulário de cadastrar cliente
    static cadastrarCliente(req, res) {
        res.render('clientes/cd_cliente')
    }

    //Método que recebe os dados do form e salva no bd
    static async cadastrarClientePost(req, res) {
        const cliente = {
            nome: req.body.nome,
            celular: req.body.numero_cell,
            email: req.body.email,
            cpf: req.body.cpf
        }
        console.log(cliente)
        await Cliente.create(cliente)
            .then(() => { res.redirect('/clientes') })
            .catch((err) => console.log('Erro ao cadastrar cliente'))
    }

    //Método que lista os produtos do banco
    static mostrarClientes(req, res) {
        Cliente.findAll({ raw: true })
            .then((data) => {
                let nenhumCliente = false
                if (data.length === 0) {
                    nenhumCliente = true
                }
                return res.status(200).json({ clientes: data, nenhumCliente }) 
            }).catch((err) => console.log(err))
    }
    static rederizarPaginaTabela(req, res) {
        return res.render('clientes/clientes')
    }

    //Método para excluir um produto no banco de dados
    static async removeCliente(req, res) {
        const id = req.body.id
        console.log(req)

        return res.status(200).json(await Cliente.destroy({ where: { id } })) && res.render('clientes/cd_cliente')
    }

    //Método para apresentar o formulário de alteração de um produto
    static atualizarCliente(req, res) {
        const vid = req.params.id  
    
        Cliente.findOne({ where: { id: vid }, raw: true })
            .then((cliente) => {
                if (cliente) {
                    return res.status(200).render('clientes/editar', { cliente }) 
                } 
            })
            .catch((error) => {
                console.error('Erro ao buscar cliente do banco de dados:', error) 
                return res.status(500).send('Erro interno do servidor') 
            }) 
    }
    

    //Método que recebe os dados alterados do form e faz o update no BD
    static async atualizarClientePost(req, res) {
        const vid = req.body.id
        const cliente = {
            id: req.body.id,
            nome: req.body.nome,
            celular: req.body.numero_cell,
            email: req.body.email,
            cpf: req.body.cpf
        }
        console.log(cliente)
        await Cliente.update(cliente, { where: { id: vid } })
            .then(() => { res.redirect('/clientes') })
            .catch((err) => console.log(err))
    }
}