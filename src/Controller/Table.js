const db = require('../dbConfig/db');

async function getTable(req, res){

    const rows = await db.query(`SELECT * FROM quinta_avenida_pastelaria.mesa`);
    return rows;
}

module.exports = { getTable }