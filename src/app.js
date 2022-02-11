const express = require('express');
const app = express();
const path = require('path');
app.use(express.static('public'));

app.set("view engine", "ejs");

var homeRouter = require('./routes/products');
app.use('/', homeRouter);

app.listen(3000, () => console.log("Server Online!"))

app.use(express.static(path.resolve(__dirname, '../public')));

/*app.get("/", function (req, res) {
    res.sendFile(path.resolve(__dirname, './views/products/home.html'));
});
*/

app.get("/login", function (req, res) {
    res.sendFile(path.resolve(__dirname, './src/views/users/login.html'));
});

app.get("/registrarse", function (req, res) {
    res.sendFile(path.resolve(__dirname, './src/views/users/register.html'));
});

app.get("/preregistro", function (req, res) {
    res.sendFile(path.resolve(__dirname, './src/views/users/preregister.html'));
});

app.get('/Product-Detail', (req, res) => {
    res.sendFile(__dirname + '/src/views/products/productDetail2.html');
});

app.get('/Carrito', (req, res) => {
    res.sendFile(__dirname + '/src/views/products/shopping.html');
});

app.get('/Nosotros', (req, res) => {
    res.sendFile(__dirname + '/src/views/products/us.html');
});

app.get('/Term&Cond', (req, res) => {
    res.sendFile(__dirname + '/src/views/users/terminos_condiciones.html');
});

app.get('/Privacidad', (req, res) => {
    res.sendFile(__dirname + '/src/views/users/aviso_privacidad.html');
});