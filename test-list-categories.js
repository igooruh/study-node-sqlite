const database = require('./services/initial-database');

const listCategories = async() => {

    const db = await database.initDB('bank.sqlite3');

    const categories = await database.listAll(db, `select * from categories`);
    console.log(`List Categories`, categories);
}

listCategories().catch(err => {
    console.log(err);
});
