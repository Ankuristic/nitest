const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
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


var categorydata=mongoose.model('categorydata',categorySchema);
module.exports= categorydata;