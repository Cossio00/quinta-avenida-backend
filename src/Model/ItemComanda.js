class ItemComanda{

    constructor(body, params){
        this.id_comanda = params['id_comanda'];
        this.items = body.items;
    }

    getComanda(){
        return this.id_comanda;
    }

    getItems(){
        return this.items;
    }

    setComanda(id_comanda){
        this.id_comanda = id_comanda;
    }

    setItems(items){
        this.items = items;
    }


}

module.exports = ItemComanda;