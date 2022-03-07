const express = require('express');
const app = express();
const path = require('path');
const methodOverride =  require('method-override'); 


app.set("view engine", "ejs");
app.use(express.static(path.resolve(__dirname, '../public')));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));



let port = 3030;

app.listen(port, function() { 
    console.log("Server Online!")
    console.log("Port: "+port)
})



var mainRouter = require('./routes/mainRoutes');
app.use('/', mainRouter);


var productRouter = require('./routes/productRoutes');
app.use('/Product', productRouter);

var userRouter = require('./routes/userRoutes');
app.use('/User', userRouter);

var adminRouter = require('./routes/adminRoutes');
app.use('/Admin', adminRouter);


//app.get("/Crear-Editar", function (req, res){
//    res.render(path.join(__dirname, './views/admin/create_edit.ejs'))
//})
//
//app.get("/Crear", function (req, res){
//    res.render(path.join(__dirname, './views/admin/create.ejs'))
//})
//
//app.get("/Editar", function (req, res){
//    res.render(path.join(__dirname, './views/admin/edit.ejs'))
//})


/*
app.get("/", function (req, res) {
    res.sendFile(path.resolve(__dirname, './views/products/home.html'));
});


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
*/