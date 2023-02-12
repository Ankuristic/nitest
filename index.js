const express = require('express');
const path = require('path');
const db  = require('./config/mongoose')
const port =8000;
var bodyParser = require('body-parser')
const productrouter= require("./routes/products");
const categoryrouter = require("./routes/categorys")
// console.log("productrouter", productrouter);
const  app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
// db();
app.use('/products',productrouter);
app.use('/category',categoryrouter);
app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server: ${err}`);
  }
  console.log(`Server is running on port: ${port}`);
});
