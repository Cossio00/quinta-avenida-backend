const { Router } = require('express');
const router = Router();


const { getItem, createItem, updateItem, deleteItem } = require('./Controller/Item');
const { getComanda, createComanda, updateComanda, deleteComanda } = require('./Controller/Comanda');



//      --------    ITEM

router.get('/item', async function(req, res){
    try{
        res.json(await getItem());
    } catch(err){
        console.error('Erro ao obter a lista de itens: ', err.message);
    }
})

router.post('/item', async function(req, res){
    try{
        res.json(await createItem(req, res));
    }catch(err){
        console.error('Erro ao criar item: ', err.message);
    }
})

router.put('/item/:id', async function(req, res){
    try{
        res.json(await updateItem(req, res));
    }catch(err){
        console.error('Erro ao atualizar item: ', err.message);
    }
})

router.delete('/item/:id', async function(req, res){
    try{
        res.json(await deleteItem(req, res));
    }catch(err){
        console.error('Erro ao remover item: ', err.message);
    }
})


//      --------    COMANDA

router.get('/comanda', async function(req, res){
    try{
        res.json(await getComanda(req, res));
    }catch(err){
        console.error('Erro ao obter a lista de comandas: ', err.message);
    }
})

router.post('/comanda', async function(req, res){
    try{
        res.json(await createComanda(req, res));
    }catch(err){
        console.error('Erro ao criar comanda: ', err.message);
    }
})

router.put('/comanda/:id', async function(req, res){
    try{
        res.json(await updateComanda(req, res));
    }catch(err){
        console.error('Erro ao atualizar comanda: ', err.message);
    }
})

router.delete('/comanda/:id', async function(req, res){
    try{
        res.json(await deleteComanda(req, res));
    }catch(err){
        console.error('Erro ao remover comanda: ', err.message);
    }
})

module.exports = router;