const path = require('path');

const shopControllers = {
    // shop: (req, res) => res.send('Ruta para la vista Shop'),
    shop: (req, res) => {
        res.render(path.resolve(__dirname, '../views/shop/shop.ejs'));
    },
    vista: (req, res) => {
        res.render(path.resolve(__dirname, '../views/shop/item.ejs'));
    },
    adicion: (req, res) => {
        res.render(path.resolve(__dirname, '../views/shop/create.ejs'));
    },
    cart: (req, res) => {
        res.render(path.resolve(__dirname, '../views/shop/carrito.ejs'));
    },
    // vista: (req, res) => res.send(`Ruta para la vista del id ${req.params.id}`),
    // adicion: (req, res) => res.send(`Ruta para la vista adición del id ${req.params.id}`),
    // cart: (req, res) => res.send('Ruta para la vista Carrito'),
};

module.exports = shopControllers;
