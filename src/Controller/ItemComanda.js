const db = require('../dbConfig/db');
const crypto = require('crypto');
const ItemComanda = require('../Model/ItemComanda');

async function getItemComanda(req, res){

    const rows = await db.query('SELECT * FROM itens_comanda');
    return rows;
}

async function createItemComanda(req, res){

    const itemComanda = new ItemComanda(req.body, req.params);
    
    sql = `INSERT INTO itens_comanda (id_comanda, id_item, quantidade)
        VALUES`
    
    itemComanda.getItems().forEach( item => {
        sql += `('${itemComanda.getComanda()}', '${item.id_item}', ${item.quantidade}),`
    });
    
    sql = sql.slice(0, -1);

    try{
        const result = await db.query(sql)
        if (result.affectedRows != 0)
            res.status(202).json({message: 'ITEM_COMANDA_CREATED_SUCCESSFULLY'});
        else throw err
    }catch(err){
        console.log(err)
        res.status(404).json({message: 'ERROR_CREATING_ITEM_COMANDA'});
    }
    
}

module.exports = { getItemComanda, createItemComanda }