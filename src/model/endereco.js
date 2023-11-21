class Endereco{

  #rua;
  #cidade;
  #bairro;
  #numero;

  constructor(rua, cidade, bairro, numero) {
      this.#rua = rua;
      this.#cidade = cidade;
      this.#bairro = bairro;
      this.#numero = numero;
  }


  get rua() {
    return this.#rua;
  }

  set rua(rua) {
    this.#rua = rua;
  }

  get cidade() {
    return this.#cidade;
  }

  set cidade(cidade) {
    this.#cidade = cidade;
  }

  get bairro() {
    return this.#bairro;
  }

  set bairro(bairro) {
    this.#bairro = bairro;
  }

  get numero() {
    return this.#numero;
  }

  set numero(numero) {
    this.#numero = numero;
  }

}

export default Endereco;