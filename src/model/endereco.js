import mongoose from "mongoose";

const endereco = new mongoose.Schema({
  
  rua: String,
  cidade: String,
  bairro: String,
  numero: Number

})

const Endereco = mongoose.model('Endereco', endereco);

export default Endereco;