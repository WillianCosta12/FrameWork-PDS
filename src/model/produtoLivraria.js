import Produto from "./produto";

class ProdutoLivraria extends Produto{

    #isPresent;

    constructor(nome, tipo, descricao, preco, isPresent){
        super(nome, tipo, descricao, preco);

        this.#isPresent = isPresent;
    }

    get isPresent(){
        return this.#isPresent;
    }

    set isPresent(present){
        this.#isPresent = present;
    }

}

export default ProdutoLivraria;