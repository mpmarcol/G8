// inicializamos express
const express = require("express");
const app = express();

// establecemos / solicitamos el path
const path = require("path");

// inicializamos method override
const methodOverride = require("method-override");

//
// const {initSession} = require('./src/utils/sessinos');
// require('dotenv').config;

// Importamos las rutas
const mainRoutes = require("./src/routes/main.routes");
const shopRoutes = require("./src/routes/shop.routes");
const adminRoutes = require("./src/routes/admin.routes");
const authRoutes = require("./src/routes/auth.routes");

const PORT = 4000;

// carpeta web estática "public"
app.use(express.static(path.resolve(__dirname, "public")));

// creamos sesion del usuario
// app.use(initSession());

// pasamos a locals para el user logueado
// app.use((req, res, next) => {
//   res.locals.isLogged = req.session.isLogged;
//   next();
// });

// usamos express
app.use(express.static("public"));

// parsing POST a JS
app.use(express.urlencoded());
app.use(express.json());

// habilita desde form
app.use(methodOverride("_method"));

// habilita ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "./src/views"));

// usamos las rutas
app.use("/", mainRoutes);
app.use("/shop", shopRoutes);
app.use("/admin", adminRoutes);
app.use("/auth", authRoutes);

// app.get('/home', (req, res) => res.sendFile(__dirname + '/public/index.html'));
// app.get('/ping', (req, res) => res.send('pong'));

// escuchamos el puerto (iniciamos el servidor)
app.listen(PORT, () =>
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
);
