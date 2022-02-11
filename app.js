const express = require('express');
const app = express();
const path = require('path');
app.use(express.static('public'));



app.listen(3000, () => console.log("Server Online!"))

app.use(express.static(path.resolve(__dirname, './public')));

app.get("/", function (req, res) {
    res.sendFile(path.resolve(__dirname, './views/products/home.html'));
});

app.get("/login", function (req, res) {
    res.sendFile(path.resolve(__dirname, './views/users/login.html'));
});

app.get("/registrarse", function (req, res) {
    res.sendFile(path.resolve(__dirname, './views/users/register.html'));
});

app.get("/preregistro", function (req, res) {
    res.sendFile(path.resolve(__dirname, './views/users/preregister.html'));
});

app.get('/Product-Detail', (req, res) => {
    res.sendFile(__dirname + '/views/products/productDetail2.html');
});

app.get('/Carrito', (req, res) => {
    res.sendFile(__dirname + '/views/products/shopping.html');
});

app.get('/Nosotros', (req, res) => {
    res.sendFile(__dirname + '/views/products/us.html');
});

app.get('/Term&Cond', (req, res) => {
    res.sendFile(__dirname + '/views/users/terminos_condiciones.html');
});

app.get('/Privacidad', (req, res) => {
    res.sendFile(__dirname + '/views/users/aviso_privacidad.html');
});