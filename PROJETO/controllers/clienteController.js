const Cliente = require('../models/Cliente')

module.exports = class ClienteController {

    //Método que mostra o formulário de cadastrar cliente
    static cadastrarCliente(req,res){
        res.render('clientes/cd_cliente')
    }

    //Método que recebe os dados do form e salva no bd
    static async cadastrarClientePost(req, res){
        const cliente = {
            nome : req.body.nome,
            celular : req.body.numero_cell,
            email : req.body.email,
            cpf : req.body.cpf
        }
        console.log(cliente)
        await Cliente.create(cliente)
            .then(()=> {res.redirect('/clientes')})
            .catch((err)=> console.log('Erro ao cadastrar cliente'))
    }

    //Método que lista os produtos do banco
    static mostrarClientes(req,res){
        Cliente.findAll({raw : true})
        .then((data) => {
            let nenhumCliente = false 
            if (data.length === 0){
                nenhumCliente = true
            }
            res.render('clientes/clientes',{clientes : data, nenhumCliente})
        }).catch((err) => console.log(err))
    }

    //Método para excluir um produto no banco de dados
    static async removeCliente(req,res){
        const vid = req.body.id

        await Cliente.destroy({where : {id : vid}})
        .then(() => {res.redirect('/clientes')})
        .catch((err) => console.log(err))
    }

    //Método para apresentar o formulário de alteração de um produto
    static atualizarCliente(req,res){
        const vid = req.params.id

        Cliente.findOne({ where : {id : vid}, raw : true})
        .then((data) => {
            res.render('clientes/editar', {cliente : data})
        })
        .catch((err) => console.log(err))
    }

    //Método que recebe os dados alterados do form e faz o update no BD
    static async atualizarClientePost(req, res){
        const vid = req.body.id 
        const cliente = {
            nome : req.body.nome,
            celular : req.body.celular,
            email : req.body.email,
            cpf : req.body.cpf
        }
        await Cliente.update(cliente, {where : {id : vid}})
        .then(() => {res.redirect('/clientes')})
        .catch((err) => console.log(err))
    }
}