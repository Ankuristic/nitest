const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
 
  
    CategoryName:{
      type: String,
      // trim: true,
      // required: true,
    },
    CategoryDescription:{
      type: String,
      // required: true,
    },

  

  
});

module.exports = mongoose.model('Category', CategorySchema);