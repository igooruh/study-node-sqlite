const database = require('../services/initial-database');

const create = async data => {

    const db = await database.initDB('../banks.sqlite3');
    await database.queryWithParams(db, `isert into (id, category) values (?, ?)`, data);
}

module.exports = {
    create,
}