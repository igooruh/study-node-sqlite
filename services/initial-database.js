const sqlite = require('sqlite3').verbose();

const initDB = databaseFile => new Promise((resolve, reject) => {

    const db = new sqlite.Database(databaseFile, err => {
        err ? reject(err) : resolve(db);
    });
});

const run = (db, query) => new Promise((resolve, reject) => {

    db.run(query, err => {
        err ? reject(err) : resolve(err);
    });
});

module.exports = {
    initDB,
    run
}
