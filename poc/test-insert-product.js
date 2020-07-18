const database = require('./services/initial-database');

const insertProducts = async() => {

    const db = await database.initDB('bank.sqlite3');

    await database.run(db, `insert into products(id, product) values(?, ?)`, [10, 'catuaba']);
    console.log('inserted products with success!');
}

insertProducts().catch(err => {
    console.log(err);
});
