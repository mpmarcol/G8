const adminControllers = {
    admin: (req, res) => res.send('Ruta para la vista Admin'),
    create: (req, res) => res.send('Ruta para vista crear usuario'),
    edit: (req, res) => res.send((`Ruta para editar usuario ${req.params.id}`)),
    delete: (req, res) => res.send(`Ruta para borrar usuario ${req.params.id}`),
}

module.exports = adminControllers;
