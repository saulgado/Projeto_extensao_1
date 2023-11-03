const Pedido = require('../models/Pedido')

module.exports = class PedidoController {

    //Método que mostra o formulário de cadastrar pedido
    static cadastrarPedido(req,res){
        res.render('pedidos/cd_pedido')
    }

    //Método que recebe os dados do form e salva no bd
    static async cadastrarPedidoPost(req, res){
        const pedido = {
            nome : req.body.nome,
            celular : req.body.celular,
            email : req.body.email,
            cpf : req.body.cpf
        }

        await Pedido.create(pedido)
            .then(()=> {//res.redirect('/pedidos')
                
                                        
        })
            .catch((err)=> console.log('Erro ao cadastrar pedido'))
    }

    //Método que lista os produtos do banco
    static mostrarPedidos(req,res){
        Pedido.findAll({raw : true})
        .then((data) => {
            let nenhumPedido = false 
            if (data.length === 0){
                nenhumPedido = true
            }
            res.render('pedidos/todos',{pedidos : data, nenhumPedido})
        }).catch((err) => console.log(err))
    }

    //Método para excluir um produto no banco de dados
    static async removePedido(req,res){
        const vid = req.body.id

        await Pedido.destroy({where : {id : vid}})
        .then(() => {res.redirect('/pedidos')})
        .catch((err) => console.log(err))
    }

    //Método para apresentar o formulário de alteração de um produto
    static atualizarPedido(req,res){
        const vid = req.params.id

        Pedido.findOne({ where : {id : vid}, raw : true})
        .then((data) => {
            res.render('pedidos/editar', {pedido : data})
        })
        .catch((err) => console.log(err))
    }

    //Método que recebe os dados alterados do form e faz o update no BD
    static async atualizarPedidoPost(req, res){
        const vid = req.body.id 
        const pedido = {
            nome : req.body.nome,
            celular : req.body.celular,
            email : req.body.email,
            cpf : req.body.cpf
        }
        await Pedido.update(pedido, {where : {id : vid}})
        .then(() => {res.redirect('/pedidos')})
        .catch((err) => console.log(err))
    }
}