const express = require('express');
const app = express();
const path = require('path');



app.listen( 4040, () => console.log("Server Online!"))

app.use(express.static(path.resolve(__dirname, './public')));

app.get("/", function(req, res) {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
});

