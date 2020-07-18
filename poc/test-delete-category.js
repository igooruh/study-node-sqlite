const database = require('./services/initial-database');

const removeCategories = async() => {

    const db = await database.initDB('bank.sqlite3');

    await database.run(db, `delete from categories where id=?`, [8]);
    console.log('deleted Category with success!');
}

removeCategories().catch(err => {
    console.log(err);
});
