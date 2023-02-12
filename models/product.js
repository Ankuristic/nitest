const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({

  
    ProductName:{
      type: String,
      // trim: true,
      // required: true,
    },
    ProductDescription:{
      type: String,
      // required: true,
    },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },

  
});

module.exports = mongoose.model('Product', ProductSchema);
