const categories = require('./model/categories')('./banco.sqlite3');

const createCategory = async() => {

    await categories.create([1, 'opa']);
    const cats = await categories.findAll();
    const cats = await categories.findAllPaginated({ pageSize: 2, currentPage: 0 });
    console.log(cats);
    await categories.remove(1);
    await categories.update(8, ['categoria atualizada']);
}
createCategory();