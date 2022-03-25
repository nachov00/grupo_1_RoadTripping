const express = require('express');
const path = require('path');
const methodOverride =  require('method-override'); 
const app = express();


app.use(express.static(path.resolve(__dirname, '../public')));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));


app.set("view engine", "ejs");


var mainRouter = require('./routes/mainRoutes');
app.use('/', mainRouter);

var productRouter = require('./routes/productRoutes');
app.use('/Product', productRouter);

var userRouter = require('./routes/userRoutes');
app.use('/User', userRouter);

var adminRouter = require('./routes/adminRoutes');
app.use('/Admin', adminRouter);


let port = 3030;
app.listen(port, function() { 
    console.log("Server Online!")
    console.log("Port: "+port)
})