import Produto from "./produto";

class ProdutoFood extends Produto{

    #ingredientes;

    constructor(nome, tipo, descricao, preco, ingredientes){
        super(nome, tipo, descricao, preco);

        this.#ingredientes = ingredientes;
    }

    get ingredientes(){
        return this.#ingredientes;
    }

    adicionarItem(produto){
        this.#ingredientes.push(produto);
    }

    removerItem(produto){
        this.#ingredientes = this.#ingredientes.filter(item => item.nome != produto.nome);
    }

}

export default ProdutoFood;