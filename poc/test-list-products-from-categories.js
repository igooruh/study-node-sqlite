const database = require('./services/initial-database');

const listProducts = async() => {

    const db = await database.initDB('bank.sqlite3');

    const catId = 7;
    const products = await database.listAllSpecific(db, `select * from products where id in (select product_id from categories_products where category_id = ?)`, [catId]);
    console.log(`List Products`, products);
}

listProducts().catch(err => {
    console.log(err);
});
