const db = require('../dbConfig/db');

async function getTable(req, res){

    const rows = await db.query(`SELECT * FROM mesa`);
    return rows;
}

module.exports = { getTable }