
const express= require('express');
const mongoose= require('mongoose');
const Prod = require('../models/product');
console.log("products",Prod)




// create Product
const createProduct =  async (req, res) => {
    console.log("styu",req.body)
    const pro = new Prod({
        name:req.body.name,
        description:req.body.description
    })
    console.log("ankur",pro)
    try{
        const prod = await pro.save();
        console.log("product",pro)
        res.status(201).json(pro);
    } catch(error){
        res.status(400).json({message: error.message});
    }
    
}

//viewProduct
const viewProduct = async (req, res) => {
    try{
    const Product = await pro.findOne();
    res.status(200).json(Product);
}   catch(error){
    res.status(400).json({message: error.message});
}
}



// UPDATE Product
const updateProduct = async (req, res) => {
    try{
    const Product = await pro.updateOne();
    res.status(200).json(Product);
} catch(error)
{
    res.status(400).json({message: error.message});
}
}

// delete Product
const deleteProduct = async (req, res) => {
    try{
        const Product = await pro.deleteOne();
        res.status(200).json(Product);
    }  catch(error){
        res.status(400).json({message:error.message})
    }
}

module.exports = {
    createProduct,
    viewProduct,
    deleteProduct,
    updateProduct
}