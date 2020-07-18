const sqlite = require('sqlite3').verbose();

const initDB = databaseFile => new Promise((resolve, reject) => {

    const db = new sqlite.Database(databaseFile, err => err ? reject(err) : resolve(db));
});

const queryWithParams = (db, query, values) => new Promise((reject, resolve) =>
    db.run(query, values), err => err ? reject(err) : resolve());

module.exports = {
    initDB,
    queryWithParams
}
