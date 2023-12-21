const path = require("path");
const path__home = path.resolve(__dirname, "./index.ejs");

const authControllers = {
  register: (req, res) => {
    res.render(path.resolve(__dirname, '../views/auth/registro.ejs'), {
      title: "USUARIOS",
    });
  },
  login: (req, res) => {
    res.render(path.resolve(__dirname, '../views/auth/login.ejs'), {
      title: "USUARIOS",
    });
  },
  // login: (req, res) => res.send('Ruta para vista ingresar usuario'),
//   register: (req, res) => res.send('Ruta para registrar usuario'),
};

module.exports = authControllers;
