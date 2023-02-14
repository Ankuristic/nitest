const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
   
  id :{
    type:String,
    // required:true
  },
  
    name:{
      type: String,
      // trim: true,
      // required: true,
    },
   description:{
      type: String,
      // required: true,
    },

    Category: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    }],

  
});

module.exports = mongoose.model('Product', ProductSchema);
