const path = require('path');

const data = [
    {
        product_id: 1, 
        family_name: "pokemon",
        license_name: "Pokemon",
        category_name: "Figuras coleccionables",
        product_name: "Pidgeotto",
        product_description: "Figura coleccionable Pokemon", 
        product_price: 1799.99,
        dues: 3,
        product_sku: "PKM001001",
        img_front: "/img/pokemon/pidgeotto-1.webp",
        img_back: "/img/pokemon/pidgeotto-box.webp",
    },
    {
        product_id: 2, 
        family_name: "pokemon",
        license_name: "Pokemon",
        category_name: "Figuras coleccionables",
        product_name: "Pidgeotto",
        product_description: "Figura coleccionable Pokemon", 
        product_price: 1799.99,
        dues: 2,
        product_sku: "PKM001001",
        img_front: "/img/pokemon/pidgeotto-1.webp",
        img_back: "/img/pokemon/pidgeotto-box.webp",
    },
    {
        product_id: 3, 
        family_name: "pokemon",
        license_name: "Pokemon",
        category_name: "Figuras coleccionables",
        product_name: "Pidgeotto",
        product_description: "Figura coleccionable Pokemon", 
        product_price: 1799.99,
        dues: 6,
        product_sku: "PKM001001",
        img_front: "/img/pokemon/pidgeotto-1.webp",
        img_back: "/img/pokemon/pidgeotto-box.webp",
    },
    {
        product_id: 4, 
        family_name: "pokemon",
        license_name: "Pokemon",
        category_name: "Figuras coleccionables",
        product_name: "Pidgeotto",
        product_description: "Figura coleccionable Pokemon", 
        product_price: 1799.99,
        dues: 6,
        product_sku: "PKM001001",
        img_front: "/img/pokemon/pidgeotto-1.webp",
        img_back: "/img/pokemon/pidgeotto-box.webp",
    },
    {
        product_id: 5, 
        family_name: "pokemon",
        license_name: "Pokemon",
        category_name: "Figuras coleccionables",
        product_name: "Pidgeotto",
        product_description: "Figura coleccionable Pokemon", 
        product_price: 1799.99,
        dues: 3,
        product_sku: "PKM001001",
        img_front: "/img/pokemon/pidgeotto-1.webp",
        img_back: "/img/pokemon/pidgeotto-box.webp",
    },
    {
        product_id: 6, 
        family_name: "pokemon",
        license_name: "Pokemon",
        category_name: "Figuras coleccionables",
        product_name: "Pidgeotto",
        product_description: "Figura coleccionable Pokemon", 
        product_price: 1799.99,
        dues: 2,
        product_sku: "PKM001001",
        img_front: "/img/pokemon/pidgeotto-1.webp",
        img_back: "/img/pokemon/pidgeotto-box.webp",
    },
    {
        product_id: 7, 
        family_name: "pokemon",
        license_name: "Pokemon",
        category_name: "Figuras coleccionables",
        product_name: "Pidgeotto",
        product_description: "Figura coleccionable Pokemon", 
        product_price: 1799.99,
        dues: 4,
        product_sku: "PKM001001",
        img_front: "/img/pokemon/pidgeotto-1.webp",
        img_back: "/img/pokemon/pidgeotto-box.webp",
    },
    {
        product_id: 8, 
        family_name: "pokemon",
        license_name: "Pokemon",
        category_name: "Figuras coleccionables",
        product_name: "Pidgeotto",
        product_description: "Figura coleccionable Pokemon", 
        product_price: 1799.99,
        dues: 8,
        product_sku: "PKM001001",
        img_front: "/img/pokemon/pidgeotto-1.webp",
        img_back: "/img/pokemon/pidgeotto-box.webp",
    },
    {
        product_id: 9, 
        family_name: "pokemon",
        license_name: "Pokemon",
        category_name: "Figuras coleccionables",
        product_name: "Pidgeotto",
        product_description: "Figura coleccionable Pokemon", 
        extended_prod_descript: "Figura coleccionable de Baby Yoda (Grogu)<br>The Mandalorian Saga, edición limitada.",
        product_price: 1799.99,
        dues: 9,
        product_sku: "PKM001001",
        img_front: "/img/pokemon/pidgeotto-1.webp",
        img_back: "/img/pokemon/pidgeotto-box.webp",
    },
];

const shopControllers = {
    // shop: (req, res) => res.send('Ruta para la vista Shop'),
    shop: (req, res) => {
        res.render(path.resolve(__dirname, '../views/shop/shop.ejs'), {
        title: "TIENDA ",
        data});
    },
    vista: (req, res) => {
        const itemID = req.params.id;
        const myItem = data.find(item => item.product_id == itemID);

        res.render(path.resolve(__dirname, '../views/shop/item.ejs'), {
            title: "TIENDA ",
            myItem});
        },
    adicion: (req, res) => {
        res.render(path.resolve(__dirname, '../views/shop/create.ejs'), {
            title: "TIENDA ",
            data});
        },
    cart: (req, res) => {
        res.render(path.resolve(__dirname, '../views/shop/carrito.ejs'), {
            title: "TIENDA ",
            data});
        },
    // vista: (req, res) => res.send(`Ruta para la vista del id ${req.params.id}`),
    // adicion: (req, res) => res.send(`Ruta para la vista adición del id ${req.params.id}`),
    // cart: (req, res) => res.send('Ruta para la vista Carrito'),
};

module.exports = shopControllers;
