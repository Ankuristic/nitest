const express = require('express');
const path = require('path');
const port =8000;
var bodyParser = require('body-parser')
const productrouter= require("./routes/products");
// console.log("productrouter", productrouter);
const  app = express();
app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({
//   extended:true
// )}
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use('/products',productrouter);
app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server: ${err}`);
  }
  console.log(`Server is running on port: ${port}`);
});
