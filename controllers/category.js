const mongoose= require('mongoose');
const Category = require('../models/category');








// create Product
const createCategory =  async (req, res) => {
    console.log("styu",req.body)
    const  category = new Category({
        name:req.body.name,
        description:req.body.description
    })
    console.log("ankur",category)
    try{
        const pro = await category.create();
        // console.log("product",product)
        res.status(201).json(pro);
    } catch(error){
        res.status(400).json({message: error.message});
    }
    
}

//viewProduct
const viewCategory = async (req, res) => {
    try{
    const Category = await category.findOne();
    res.status(200).json(Category);
}   catch(error){
    res.status(400).json({message: error.message});
}
}



// UPDATE Product
const updateCategory = async (req, res) => {
    try{
    const Category = await category.updateOne();
    res.status(200).json(Category);
} catch(error)
{
    res.status(400).json({message: error.message});
}
}

// delete Product
const deleteCategory = async (req, res) => {
    try{
        const Category = await category.deleteOne();
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