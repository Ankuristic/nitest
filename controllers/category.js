const mongoose= require('mongoose');
const Category = require('../models/category');








// create Product
const createCategory =  async (req, res) => {
    console.log("styu",req.body)
    const  cate = new Category({
        name:req.body.name,
        description:req.body.description
    })
    // console.log("ankur",category)
    try{
        const cat = await cate.save();
        // console.log("product",product)
        res.status(201).json(cat);
    } catch(error){
        res.status(400).json({message: error.message});
    }
    
}

//viewProduct
const viewCategory = async (req, res) => {
    try{
    const Category = await cate.findOne();
    res.status(200).json(Category);
}   catch(error){
    res.status(400).json({message: error.message});
}
}



// UPDATE Product
const updateCategory = async (req, res) => {
    try{
    const Category = await cate.updateOne();
    res.status(200).json(Category);
} catch(error)
{
    res.status(400).json({message: error.message});
}
}

// delete Product
const deleteCategory = async (req, res) => {
    try{
        const Category = await cate.deleteOne();
        res.status(200).json(Category);
    }  catch(error){
        res.status(400).json({message:error.message})
    }
}

module.exports = {
    createCategory,
    viewCategory,
    deleteCategory,
    updateCategory
}