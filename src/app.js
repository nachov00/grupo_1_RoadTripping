const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require("express-session");
const methodOverride = require('method-override');
const httpError = require('http-errors');


const app = express();


app.set("view engine", "ejs");
app.set('views', path.resolve(__dirname, 'views'));
app.use(express.static(path.resolve(__dirname, '../public')));

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

app.use(cookieParser());
app.use(session({
    secret: "COMPLETE", //COMPLETE
    resave: "COMPLETE", //COMPLETE
    saveUninitialized: "COMPLETE" //COMPLETE
}))

app.use(express.json());



var mainRouter = require('./routes/mainRoutes');
                app.use('/', mainRouter);

var productRouter = require('./routes/productRoutes');
                app.use('/Product', productRouter);

var userRouter = require('./routes/userRoutes');
                app.use('/User', userRouter);

var adminRouter = require('./routes/adminRoutes');
                app.use('/Admin', adminRouter);



let port = 3030;

app.listen(port, function () {
    console.log("Server Online!")
    console.log("Port: " + port)
})



app.use(function (req, res, next) {
    next(httpError(404));
});

app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;