const {v4} = require('uuid');
const {v1} = require('uuid');

let produtos = [
    {
        id: v1(),
        name: 'Mouse',
        category: 'Perifericos',

    },
    {
        id: v4(),
        name: 'Teclado',
        category: 'Perifericos',
    },
    {
        id: v4(),
        name: 'Fone',
        category: 'Perifericos',
    }
];

class ProductsRepository {
    findAll() {
        return produtos;
    };

    findById() {

    };

    delete() {

    };

    create() {

    };

    update() {

    };
}

module.exports = new ProductsRepository();