const database = require('./services/initial-database');

const removeProducts = async() => {

    const db = await database.initDB('bank.sqlite3');

    await database.run(db, `delete from categories_products where product_id=?`, [9]);
    await database.run(db, `delete from products where id=?`, [9]);
    console.log('deleted product with success!');
}

removeProducts().catch(err => {
    console.log(err);
});
