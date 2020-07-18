const categories = require('./model/categories');

const createCategory = async() => {

    categories.create([1, 'opa']);
}
createCategory