const db = require('../dbConfig/db');
const crypto = require('crypto');
const Item = require('../Model/Item');

async function getItem(req, res){

    const rows = await db.query(`SELECT * FROM item`);
    return rows;
}

async function createItem(req, res){
    const item = new Item(req.body)
    item.setId(crypto.randomUUID().slice(0,30));
    
    sql = `INSERT INTO item (id, nome, preco)
            VALUES
            ('${item.getId()}','${item.getNome()}', ${item.getPreco()})`;


    try{
        const result = await db.query(sql);
        if (result.affectedRows != 0)
            res.status(202).json({message: 'ITEM_CREATED_SUCCESSFULLY'});
        else throw err
    }catch(err){
        console.log(err)
        res.status(404).json({message: 'ERROR_CREATING_ITEM'});
    }
}

async function updateItem(req, res){
    const item = new Item(req.body);
    const itemId = req.params['id'];
    item.setId(itemId);
    
    sql = `UPDATE item
            SET nome = '${item.getNome()}', preco = ${item.getPreco()}
            WHERE id = '${item.getId()}'`;
        
    try{
        await db.query(sql);
    }catch(err){
        res.status(404).json({message: 'INVALID_DATA'});
    }finally{
        res.status(202).json({message: 'ITEM_UPDATED_SUCCESSFULLY'});
    }        
}


async function deleteItem(req, res){
    const itemId = req.params['id'];
    
    sql = `DELETE FROM item
            WHERE id = '${itemId}'`;
    
    try{
        await db.query(sql);
    }catch(err){
        res.status(404).json({message: 'ERROR'});
    }finally{
        res.status(202).json({message: 'ITEM_DELETED_SUCCESSFULLY'});
    }  
}


module.exports = { getItem, createItem, updateItem, deleteItem }