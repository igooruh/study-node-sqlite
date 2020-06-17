const sqlite = require('sqlite3').verbose();

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
