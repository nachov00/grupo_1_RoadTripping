const express = require('express');
const app = express();
const path = require('path');


app.listen( 4040, () => console.log("Server Online!"))

app.use(express.static(path.resolve(__dirname, './public')));

app.get("/home", function(req, res) {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
});

app.get("/shopping", function(req, res) {
    res.sendFile(path.resolve(__dirname, './views/shopping.html'));
});

app.get("/us", function(req, res) {
    res.sendFile(path.resolve(__dirname, './views/us.html'));
});

app.get("/Term&Cond", function(req, res) {
    res.sendFile(path.resolve(__dirname, './views/terminos_condiciones.html'));
});

app.get("/Privacidad", function(req, res) {
    res.sendFile(path.resolve(__dirname, './views/aviso_privacidad.html'));
});

app.get("/header", function(req, res) {
    res.sendFile(path.resolve(__dirname, './views/header.html'));
});