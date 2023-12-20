const mainControllers = {
    home: (req, res) => res.send('Ruta para la vista Home'),
    contact: (req, res) => res.send('Ruta para la vista Contact'),
    about: (req, res) => res.send('Ruta para la vista About'),
    faqs: (req, res) => res.send('Ruta para la vista FAQs'),
}

module.exports = mainControllers;
