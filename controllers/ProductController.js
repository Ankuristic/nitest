const mongoose = require("mongoose");
const Product = require("../models/Product");

const productController = {};

// Show list of product
productController.list = (req, res) => {
  Product.find({}).exec((err, products) => {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/products/index", {products: products});
    }
  });
};
//pagination  of the product list

productController.paginate = (req,res) => {
  var page = parseInt(req.query.page)
  var size = parseInt(req.query.size)
  var query = {}
  if(page< 0 || pageNo === 0) {
        response = {"error" : true,"message" : "invalid page number, should start with 1"};
        return res.json(response)
  }
  query.skip = size * (page - 1)
  query.limit = size
  Product.find({},{},function(err,products){
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/products/index", {products: products});
    }
  })
}



// Show category by id
productController.show = (req, res) => {
  Product.findOne({_id: req.params.id}).exec((err, product) => {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/products/show", {product: product});
    }
  });
};

// Create new product
productController.create = (req, res) => {
  res.render("../views/products/create");
};

// Save new product
productController.save = (req, res) => {
  const product = new   Product(req.body);

  product.save((err) => {
    if(err) {
      console.log(err);
      res.render("../views/products/create");
    } else {
      console.log("Successfully created an product.");
      res.redirect("/products/show/"+product._id);
    }
  });
};

// Edit an product
productController.edit = (req, res) => {
  Product.findOne({_id: req.params.id}).exec((err, product) => {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/products/edit", {product: product});
    }
  });
};

// Update an product
productController.update = (req, res) => {
  Product.findByIdAndUpdate(req.params.id, { $set: { name: req.body.name, address: req.body.address, position: req.body.position, salary: req.body.salary }}, { new: true }, function (err, product) {
    if (err) {
      console.log(err);
      res.render("../views/products/edit", {product: req.body});
    }
    res.redirect("/products/show/"+product._id);
  });
};

// Delete an product
productController.delete = (req, res) => {
  Product.remove({_id: req.params.id}, (err) => {
    if (err) {
      console.log(err);
    }
    else {
      console.log("Product deleted!");
      res.redirect("/products");
    }
  });
};

module.exports = productController;
