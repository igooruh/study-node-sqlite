const database = require('../services/initial-database');

const connectDatabase = nameDatabase => {

    const create = async data => {
        
        const db = await database.initDB(nameDatabase);
        await database.queryWithParams(db, `insert into categories(id, category) values (?, ?)`, data);
    }
    
    const findAll = async() => {
        
        const db = await database.initDB(nameDatabase);
        return await database.queryAll(db, `select * from category`);
    }
    
    const remove = async id => {
        
        const db = await database.initDB(nameDatabase);
        await database.queryWithParams(db, 'delete from categories where id=?', [id]);
    }
    
    const update = async (id, data) => {
        
        const db = await database.initDB(nameDatabase);
        await database.queryWithParams(db, 'update categories set category=? where id=?', [...data, id]);
    }
    
    const findAllPaginated = async({ pageSize = 1, currentPage = 0 }) => {
        
        const db = await database.initDB(nameDatabase);
        return await database.queryAll(db, `select * from categories limit ${currentPage * pageSize}, ${pageSize}`);
    }

    return {
        create,
        findAll,
        remove,
        update,
        findAllPaginated
    }
}

export default connectDatabase;