import express from 'express';

import Pedido from '../model/pedido.js';

const pedidoRouter = express.Router()

pedidoRouter.get("/", async (req, res) => {
    const pedidos = await Pedido.find()
    res.send(pedidos)
})

pedidoRouter.post("/add", async (req, res) => {

    const pedido = new Pedido({
        produtos: req.body.produtos,
        endereco: req.body.endereco
    })

    await pedido.save();

    res.send(pedido);

})

pedidoRouter.delete("/delete/:id", async (req, res) => {

    const pedido = await Pedido.findByIdAndDelete(req.params.id)
    res.send(pedido)

})

pedidoRouter.put("/update/:id", async (req, res) => {
    
    const pedido = await Pedido.findByIdAndUpdate(req.params.id, {
        produtos: req.body.produtos,
        endereco: req.body.endereco
    }, {
        new: true
    })
    res.send(pedido)

})


export default pedidoRouter