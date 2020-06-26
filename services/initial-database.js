const sqlite = require('sqlite3').verbose();

const initDB = databaseFile => new Promise((resolve, reject) => {

    const db = new sqlite.Database(databaseFile, err => {
        err ? reject(err) : resolve(db);
    });
});

const run = (db, query, values) => new Promise((resolve, reject) => {

    db.run(query, values, err => {
        err ? reject(err) : resolve(err);
    });
});

const listAll = (db, query, values) => new Promise((resolve, reject) => {

    db.all(query, values, (err, rows) => err ? reject(err) : resolve(rows));
});

module.exports = {
    initDB,
    run,
    listAll
}
