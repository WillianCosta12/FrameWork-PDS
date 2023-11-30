import mongoose from "mongoose";
import Produto from "./produto.js";

const pedido = new mongoose.Schema({
  
  produtos:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Produto',
    required: true
  }],
  endereco: String

})

const Pedido = mongoose.model('Pedido', pedido);

export default Pedido;