import mongoose from "mongoose";

const user = new mongoose.Schema({
  
  nome: String,
  login: String,
  senha: String,

})

const Usuario = mongoose.model('User', user);

export default Usuario;