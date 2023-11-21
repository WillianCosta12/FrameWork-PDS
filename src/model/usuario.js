class Usuario{

    #nome;
    #login;
    #senha;
    #endereco;

    constructor(nome, login, senha, endereco){
        this.#nome = nome;
        this.#login = login;
        this.#senha = senha;
        this.#endereco = endereco;
    }

    get nome(){
        return this.#nome;
    }

    set nome(nome){
        this.#nome = nome;
    }

    get login(){
        return this.#login;
    }

    set login(login){
        this.#login = login;
    }

    get senha(){
        return this.#senha;
    }

    set senha(senha){
        this.#senha = senha;
    }

    get endereco(){
        return this.#endereco;
    }

    set endereco(endereco){
        this.#endereco = endereco;
    }
}

export default Usuario;