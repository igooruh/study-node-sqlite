const sqlite = require('sqlite3').verbose();

const initDB = databaseFile => new Promise((resolve, reject) => {

    const db = new sqlite.Database(databaseFile, err => err ? reject(err) : resolve(db));
});

module.exports = {
    initDB,
    run,
    listAllSpecific,
    listAll
}
