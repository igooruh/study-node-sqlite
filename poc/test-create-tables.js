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

const createTables = async() => {

    const db = await initDB('bank.sqlite3');

    await run(db, `
        CREATE TABLE categories(
            id INTEGER PRIMARY KEY NOT NULL,
            category TEXT
        );
    `);
    console.log('Categories table created!');

    await run(db, `
        CREATE TABLE products(
            id INTEGER PRIMARY KEY NOT NULL,
            product TEXT,
            price REAL
        );
    `);
    console.log('Products table created!');

    await run(db, `
        CREATE TABLE images(
            id INTEGER PRIMARY KEY NOT NULL,
            description TEXT,
            url TEXT,
            product_id INTEGER REFERENCES products(id)
        );
    `);
    console.log('Images table created!');

    await run(db, `
        CREATE TABLE categories_products(
            product_id INTEGER REFERENCES products(id),
            category_id INTEGER REFERENCES categories(id)
        );
    `);
    console.log('Categories and products table created!');
}

createTables().catch(err => {
    console.log(err);
});
