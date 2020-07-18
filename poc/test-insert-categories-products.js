const database = require('./services/initial-database');

const insertCategoriesProducts = async() => {

    const db = await database.initDB('bank.sqlite3');

    await database.run(db, `insert into categories_products(category_id, product_id) values(?, ?)`, [10, 9]);
    console.log('inserted union categories and products with success!');
}

insertCategoriesProducts().catch(err => {
    console.log(err);
});
