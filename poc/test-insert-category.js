const database = require('./services/initial-database');

const insertCategories = async() => {

    const db = await database.initDB('bank.sqlite3');

    await database.run(db, `insert into categories(id, category) values(?, ?)`, [8, 'televisão']);
    console.log('inserted Category with success!');
}

insertCategories().catch(err => {
    console.log(err);
});
