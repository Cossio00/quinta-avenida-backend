class ItemComanda{

    constructor(body){
        this.id_comanda = body.id_comanda;
        this.id_item = body.id_item;
        this.quantidade = body.quantidade;
    }

    getComanda(){
        return this.id_comanda;
    }

    getItem(){
        return this.id_item;
    }

    getQuantidade(){
        return this.quantidade;
    }

    setComanda(id_comanda){
        this.id_comanda = id_comanda;
    }

    setItem(id_item){
        this.id_item = id_item;
    }

    setQuantidade(quantidade){
        this.quantidade = quantidade;
    }
}

module.exports = ItemComanda;