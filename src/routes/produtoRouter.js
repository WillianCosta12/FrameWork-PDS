import express from 'express';

import Produto from '../model/produto.js';

const produtoRouter = express.Router()

produtoRouter.get("/", async (req, res) => {
    const produtos = await Produto.find()
    res.send(produtos)
})

produtoRouter.post("/add", async (req, res) => {

    const produto = new Produto({
        nome: req.body.nome,
        tipo: req.body.tipo,
        descricao: req.body.descricao,
        preco: req.body.preco
    })

    await produto.save();

    res.send(produto);

})

produtoRouter.delete("/delete/:id", async (req, res) => {

    const produto = await Produto.findByIdAndDelete(req.params.id)
    res.send(produto)

})

produtoRouter.put("/update/:id", async (req, res) => {
    
    const produto = await Produto.findByIdAndUpdate(req.params.id, {
        nome: req.body.nome,
        tipo: req.body.tipo,
        descricao: req.body.descricao,
        preco: req.body.preco
    }, {
        new: true
    })
    res.send(produto)

})


export default produtoRouter