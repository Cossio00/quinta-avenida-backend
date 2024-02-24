class Item{
    
    constructor(body){
        this.id = body.id;    
        this.nome = body.nome;
        this.preco = body.preco;
    }

    getNome(){
        return this.nome;
    }
    
    getPreco(){
        return this.preco;
    }

    getId(){
        return this.id;
    }

    setId(id){
        this.id = id;
    }
    
    setNome(nome){
        this.nome = nome;
    }
    setPreco(preco){
        this.preco = preco;
    }
}

module.exports = Item;