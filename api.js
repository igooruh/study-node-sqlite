const categories = require('./model/categories');

const createCategory = async() => {

    await categories.create([1, 'opa']);
    const cats = await categories.findAll;
    console.log(cats);
    await categories.remove(1);
}
createCategory