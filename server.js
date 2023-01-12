const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
var sql = require('./db');
const path = require('path');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true}));

app.use(express.static(path.join(__dirname, "public")));

app.get('/',(req, res)=>{
    res.redirect("views/SignIn.html");
    //res.json({message:"Welcome to web course example application."});
});

app.listen(port, () => {
    console.log("Server is running on port " + port );
});



