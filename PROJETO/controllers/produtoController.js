const Produto = require('../models/Produto')

module.exports = class ProdutoController {

    //Método que mostra o formulário de cadastrar produto
    static cadastrarProduto(req,res){
        res.render('produtos/cd_produto')
    }

    //Método que recebe os dados do form e salva no bd
    static async cadastrarProdutoPost(req, res){
        const produto = {
            nome : req.body.nome,
            valor : req.body.valor,
            tipo : req.body.tipo
        }

        await Produto.create(produto)
            .then(()=> {res.redirect('/produtos')})
            .catch((err)=> console.log('Erro ao cadastrar produto', err))
    }

    //Método que lista os produtos do banco
    static mostrarProdutos(req,res){
        Produto.findAll({raw : true})
        .then((data) => {
            let nenhumProduto = false 
            if (data.length === 0){
                nenhumProduto = true
            }
            res.render('produtos/todos_produtos',{produtos : data, nenhumProduto})
        }).catch((err) => console.log(err))
    }

    //Método para excluir um produto no banco de dados
    static async removeProduto(req,res){
        const vid = req.body.id

        await Produto.destroy({where : {id : vid}})
        .then(() => {res.redirect('/produtos')})
        .catch((err) => console.log(err))
    }

    //Método para apresentar o formulário de alteração de um produto
    static atualizarProduto(req,res){
        const vid = req.params.id

        Produto.findOne({ where : {id : vid}, raw : true})
        .then((data) => {
            res.render('produtos/editar_produtos', {produto : data})
        })
        .catch((err) => console.log(err))
    }

    //Método que recebe os dados alterados do form e faz o update no BD
    static async atualizarProdutoPost(req, res){
        const vid = req.body.id 
        const produto = {
            nome : req.body.nome,
            valor : req.body.valor,
            tipo : req.body.tipo
        }
        await Produto.update(produto, {where : {id : vid}})
        .then(() => {res.redirect('/produtos')})
        .catch((err) => console.log(err))
    }
}