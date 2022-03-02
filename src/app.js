const express = require('express');
const app = express();
const path = require('path');

app.set("view engine", "ejs");
app.use(express.static(path.resolve(__dirname, '../public')));




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
