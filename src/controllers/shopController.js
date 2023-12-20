const shopControllers = {
    shop: (req, res) => res.send('Ruta para la vista Shop'),
    vista: (req, res) => res.send(`Ruta para la vista del id ${req.params.id}`),
    adicion: (req, res) => res.send(`Ruta para la vista adición del id ${req.params.id}`),
    cart: (req, res) => res.send('Ruta para la vista Carrito'),
};

module.exports = shopControllers;
