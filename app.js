const express = require ('express');
const app = express();

const mainRoutes = require('./src/routes/main.routes');
const shopRoutes = require('./src/routes/shop.routes');
const adminRoutes = require('./src/routes/admin.routes');
const authRoutes = require('./src/routes/auth.routes');

app.use(express.static('public'));

app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);
app.use('/admin', authRoutes);

// app.get('/home', (req, res) => res.sendFile(__dirname + '/public/index.html'));
// app.get('/ping', (req, res) => res.send('pong'));

app.listen (4000, () => console.log("Servidor corriendo en http://localhost:4000"))
