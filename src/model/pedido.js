class Pedido{

    #produtos;

    constructor(produtos){
        this.#produtos = produtos;
    }

    get produtos(){
        return this.#produtos;
    }

    set produtos(produtos){
        this.#produtos = produtos;
    }

}

export default Pedido;