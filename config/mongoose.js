
const mongoose = require("mongoose")

const mongoURI= "mongodb+srv://Ankuristic12:Adya1998@cluster0.0lufvph.mongodb.net/?retryWrites=true&w=majority"
const connectionParams ={
    useNewUrlParser:true,
    useUnifiedTopology:true
}
console.log("hello",connectionParams)
mongoose .connect(mongoURI ,connectionParams) .then(() => console.log("MongoDB connected")) .catch((e) => {console.log(e)});




// // required mongoose 
// const mongoose=require('mongoose');

// // connected to the db
// mongoose.connect('mongodb://127.0.0.1:27017/projectCategory',{useNewUrlParser:true, useUnifiedTopology:true});

// // acquired connection to db
// const db=mongoose.connection;

// //error
// db.on('error',console.error.bind(console,"Error connecting to MongoDB"));

// //up and running then print the message
// db.once('open',function(){
//     console.log('Connected to Database :: MongoDB');
// });

// module.exports = db;
// const mongoose = require("mongoose")

// const mongoURI= "mongodb+srv://Ankuristic12:Adya1998@cluster0.0lufvph.mongodb.net/?retryWrites=true&w=majority&ssl=true"
// const connectionParams ={
//     useNewUrlParser:true,
//     useUnifiedTopology:true,
//     socketTimeoutMS:43200000,
// }
// console.log("hello",connectionParams)
// mongoose .connect(mongoURI ,connectionParams) .then(() => console.log("MongoDB connected")) .catch((e) => {console.log(e)});









// let mongoose = require('mongoose');
// const server = '127.0.0.1:27017'; // REPLACE WITH YOUR DB SERVER
// const database = 'ProductCategory';      // REPLACE WITH YOUR DB NAME
// class Database {
//   constructor() {
//     this._connect()
//   }
// _connect() {
//      mongoose.connect(`mongodb://${server}/${database}`)
//        .then(() => {
//          console.log('Database connection successful')
//        })
//        .catch(err => {
//          console.error('Database connection error')
//        })
//   }
// }
// module.exports = new Database()