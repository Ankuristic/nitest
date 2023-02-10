const products = require('../models/products');


// create Product
const createProduct =  async (req, res) => {
    const products = new  Products({
        name: req.body. name,
        description:req.body. description
    })
    try{
        const Product = await products.save();
        res.status(201).json(Product);
    } catch(error){
        res.status(400).json({message: error.message});
    }
    
}

//viewProduct
const viewProduct = async (req, res) => {
    try{
    const Product = await products.findOne();
    res.status(200).json(Product);
}   catch(error){
    res.status(400).json({message: error.message});
}
}



// UPDATE Product
const updateProduct = async (req, res) => {
    try{
    const Product = await products.updateOne();
    res.status(200).json(Product);
} catch(error)
{
    res.status(400).json({message: error.message});
}
}

// delete Product
const deleteProduct = async (req, res) => {
    try{
        const Product = await products.deleteOne();
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