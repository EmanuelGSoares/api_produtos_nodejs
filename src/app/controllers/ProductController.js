const ProductsRepository = require('../repositories/ProductsRepository.js');

class ProductController {
    index(request, response) {
        const produtos = ProductsRepository.findAll();
        response.json(produtos);
    }
    show() {

     }
    store() { 

    }
    update() {

     }
    delete() { 

    }
}

module.exports = new ProductController();