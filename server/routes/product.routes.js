const Product = require('../controllers/product.controller');

module.exports = app =>{
    app.get('/api/products', Product.findAll);
    app.post('/api/products/new', Product.addProduct);
    app.get('/api/products/:_id', Product.oneProduct);
    app.put('/api/products/:_id', Product.updateProduct);
    app.delete('/api/products/:_id', Product.remove);
}