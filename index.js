const express = require('express');
const path = require('path');
const port =8000;
const productrouter= require("./routes/products");


const  app = express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use('/products',productrouter);

// app.use('/options',optionrouter);
// app.get('/practice', (request, response)=>
// {
//     var options={
//         title:"practice page"
//     }
//     return response.render('practice', options);
// });
app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server: ${err}`);
  }
  console.log(`Server is running on port: ${port}`);
});
