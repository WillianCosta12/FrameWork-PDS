import mongoose from "mongoose";
import Produto from "./produto";

const pedido = new mongoose.Schema({
  
  produtos: [Produto]

})

const Pedido = mongoose.model('Pedido', pedido);

export default Pedido;