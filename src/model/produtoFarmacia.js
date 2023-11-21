import Produto from "./produto";

class ProdutoFarmacia extends Produto{

    #dose;

    constructor(nome, tipo, descricao, preco, dose){
        super(nome, tipo, descricao, preco);

        this.#dose = dose;
    }

    get dose(){
        return this.#dose;
    }

    set dose(dose){
        this.#dose = dose;
    }

}

export default ProdutoFarmacia;