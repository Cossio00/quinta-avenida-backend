const db = require('../dbConfig/db');
const crypto = require('crypto');
const Comanda = require('../Model/Comanda');

async function getComanda(req, res){

    const rows = await db.query('SELECT * FROM comanda');
    return rows;
}

async function createComanda(req, res){
    const comanda = new Comanda(req.body);
    comanda.setId(crypto.randomUUID().slice(0,20));

    sql = `INSERT INTO comanda (id, numero_mesa, horario, pago)
            VALUES ('${comanda.getId()}', ${comanda.getNumero()}, '${comanda.getHorario()}', ${comanda.getPago()})`;
    
    try{
        const result = await db.query(sql)
        if (result.affectedRows != 0)
            res.status(202).json({message: 'COMANDA_CREATED_SUCCESSFULLY'});
        else throw err
    }catch(err){
        console.log(err)
        res.status(404).json({message: 'ERROR_CREATING_COMANDA'});
    }
}

async function updateComanda(req, res){
    const comanda = new Comanda(req.body);
    const comandaID = req.params['id'];
    comanda.setId(comandaID)


    sql = `UPDATE comanda
            SET numero_mesa = ${comanda.getNumero()}, horario = '${comanda.getHorario()}', pago = ${comanda.getPago()}
            WHERE id = '${comanda.getId()}'`;
        
    try{
        await db.query(sql);
    }catch(err){
        res.status(404).json({message: 'INVALID_DATA'});
    }finally{
        res.status(202).json({message: 'COMANDA_UPDATED_SUCCESSFULLY'});
    }        
}

async function deleteComanda(req, res){
    const comandaId = req.params['id'];

    sql = `DELETE FROM comanda
            WHERE id = '${comandaId}'`;
    
    try{
        await db.query(sql);
    }catch(err){
        res.status(404).json({message: 'ERROR'});
    }finally{
        res.status(202).json({message: 'COMANDA_DELETED_SUCCESSFULLY'});
    }  
}
module.exports = { getComanda, createComanda, updateComanda, deleteComanda }