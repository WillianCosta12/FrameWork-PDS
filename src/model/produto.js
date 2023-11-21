class Produto{

    #nome;
    #tipo;
    #descricao;
    #preco;

    constructor(nome, tipo, descricao, preco){
        this.#nome = nome;
        this.#tipo = tipo;
        this.#descricao = descricao;
        this.#preco = preco;
    }

    get nome() {
        return this.#nome;
      }
    
      set nome(nome) {
        this.#nome = nome;
      }
    
      get tipo() {
        return this.#tipo;
      }
    
      set tipo(tipo) {
        this.#tipo = tipo;
      }

      get descricao() {
        return this.#descricao;
      }
    
      set descricao(descricao) {
        this.#descricao = descricao;
      }
    
      get preco() {
        return this.#preco;
      }
    
      set preco(preco) {
        if (typeof preco === 'number' && preco >= 0) {
          this.#preco = preco;
        } else {
          console.error('O preço deve ser um número não negativo.');
        }
      }

}

export default Produto;