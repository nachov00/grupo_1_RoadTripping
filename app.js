const express = require('express');
const app = express();
const path = require('path');
app.use(express.static('public'));



app.listen(6789, () => console.log("Server Online!"))

app.use(express.static(path.resolve(__dirname, './public')));

app.get("/", function (req, res) {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
});

app.get("/login", function (req, res) {
    res.sendFile(path.resolve(__dirname, './views/login.html'));
});

app.get("/registrarse", function (req, res) {
    res.sendFile(path.resolve(__dirname, './views/register.html'));
});

app.get("/preregistro", function (req, res) {
    res.sendFile(path.resolve(__dirname, './views/preregister.html'));
});

app.get('/Product-Detail', (req, res) => {
    res.sendFile(__dirname + '/views/productDetail2.html');
});

app.get('/Carrito', (req, res) => {
    res.sendFile(__dirname + '/views/shopping.html');
});

app.get('/Nosotros', (req, res) => {
    res.sendFile(__dirname + '/views/us.html');
});

app.get('/Term&Cond', (req, res) => {
    res.sendFile(__dirname + '/views/terminos_condiciones.html');
});

app.get('/Privacidad', (req, res) => {
    res.sendFile(__dirname + '/views/aviso_privacidad.html');
});