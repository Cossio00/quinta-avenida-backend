const { Router } = require('express');
const router = Router();


const { getTable } = require('./Controller/Table');


router.get('/table', async function(req, res){
    try{
        res.json(await getTable());
    } catch(err){
        console.error('Erro ao obter a lista de mesas: ', err.message);
    }
})

module.exports = router;
//