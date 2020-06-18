const database = require('./services/initial-database');

const updateCategories = async() => {

    const db = await database.initDB('bank.sqlite3');

    await database.run(db, `update categories set category=? where id=?`, ['televisão atualizada', 8]);
    console.log('updated Category with success!');
}

updateCategories().catch(err => {
    console.log(err);
});
