const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name:{
      type: String,
      // trim: true,
      // required: true,
    },
    description:{
      type: String,
      // required: true,
    }

  }
)

// const Product = mongoose.model('Product', productSchema);

// module.exports = Product;


var productdata=mongoose.model('productdata',productSchema);
module.exports= productdata;






