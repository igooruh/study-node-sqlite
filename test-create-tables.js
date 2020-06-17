const sqlite = require('sqlite3').verbose();

const initDB = databaseFile => new Promise((resolve, reject) => {

    const db = new sqlite.Database(databaseFile, err => {
        err ? reject(err) : resolve(err);
    });
});

const run = (db, query) => new Promise((resolve, reject) => {

    db.run(query, err => {
        err ? reject(err) : resolve(err);
    });
});

const createTables = async() => {

    const db = await initDB('bank.sqlite3');
}

const db = new sqlite.Database('bank.sqlite3', err => {
    console.log(err, 'init')
    db.run(`
        CREATE TABLE categories(
            id INTEGER PRIMARY KEY NOT NULL,
            category TEXT
        );
    `, err => {
        return err ? console.log(err) : console.log('Table created!'); 
    });
});
