const { Router } = require('express');
const router = Router();


const { getItem, createItem, updateItem } = require('./Controller/Item');


router.get('/item', async function(req, res){
    try{
        res.json(await getItem());
    } catch(err){
        console.error('Erro ao obter a lista de mesas: ', err.message);
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
module.exports = router;
//