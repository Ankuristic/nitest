const express = require('express');
const  app = express();
const path = require('path');
const fs = require('fs');
const db  = require('./config/mongoose')
const port =8000;
var bodyParser = require('body-parser')
const productrouter= require("./routes/products");
const categoryrouter = require("./routes/categorys")
const Home = require("./routes/Home")
// console.log("productrouter", productrouter);
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine','ejs');
// app.set('views','./views');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')))
// db();


app.use('/',Home)
app.use('/products',productrouter);
app.use('/categorys',categoryrouter);
app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server: ${err}`);
  }
  console.log(`Server is running on port: ${port}`);
});
