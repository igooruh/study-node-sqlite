const database = require('./services/initial-database');

const updateProducts = async() => {

    const db = await database.initDB('bank.sqlite3');

    await database.run(db, `update products set product=? where id=?`, ['Iphone 11', 8]);
    console.log('updated product with success!');
}

updateProducts().catch(err => {
    console.log(err);
});
