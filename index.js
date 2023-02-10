const express = require('express');
const path = require('path');
const port =8000;

const  app = express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.get('/',function(req,res){
    res.send(port)
})
