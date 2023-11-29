import mongoose from "mongoose";

const produto = new mongoose.Schema({
  
  nome: String,
  tipo: String,
  descricao: String,
  preco: Number

})

const Produto = mongoose.model('Produto', produto);

export default Produto;