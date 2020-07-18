const database = require('../services/initial-database');

const create = async data => {

    const db = await database.initDB('../bankApi.sqlite3');
    await database.queryWithParams(db, `insert into categories(id, category) values (?, ?)`, data);
}

const findAll = async() => {

    const db = await database.initDB('../bankApi.sqlite3');
    return await database.queryWithParams(db, `select * from category`);
}

const remove = async id => {

    const db = await database.initDB('../bankApi.sqlite3');
    await database.queryWithParams(db, 'delete from categories where id=?', [id]);
}

const update = async (id, data) => {

    const db = await database.initDB('../bankApi.sqlite3');
    await database.queryWithParams(db, 'update categories set category=? where id=?', [...data, id]);
}

module.exports = {
    create,
    findAll,
    remove,
    update
}