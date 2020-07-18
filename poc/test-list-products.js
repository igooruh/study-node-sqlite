const database = require('./services/initial-database');

const listProducts = async() => {

    const db = await database.initDB('bank.sqlite3');

    const products = await database.listAll(db, `select * from products`);
    console.log(`List Products`, products);
}

listProducts().catch(err => {
    console.log(err);
});
