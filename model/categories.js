const database = require('../services/initial-database');

const create = async data => {

    const db = await database.initDB('../bankApi.sqlite3');
    await database.queryWithParams(db, `insert into categories(id, category) values (?, ?)`, data);
}

const findAll = async() => {

    const db = await database.initDB('../bankApi.sqlite3');
    return await database.queryWithParams(db, `select * from category`);
}

module.exports = {
    create,
    // findAll
}