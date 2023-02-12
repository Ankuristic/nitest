const mongoose = require("mongoose");
const Product = require("../models/Product");

const employeeController = {};

// Show list of employees
employeeController.list = (req, res) => {
  Product.find({}).exec((err, products) => {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/products/index", {products: products});
    }
  });
};
//pagination  of the employee list

employeeController.paginate = (req,res) => {
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



// Show employee by id
employeeController.show = (req, res) => {
  Product.findOne({_id: req.params.id}).exec((err, product) => {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/products/show", {product: product});
    }
  });
};

// Create new employee
employeeController.create = (req, res) => {
  res.render("../views/products/create");
};

// Save new employee
employeeController.save = (req, res) => {
  const product = new   Product(req.body);

  product.save((err) => {
    if(err) {
      console.log(err);
      res.render("../views/products/create");
    } else {
      console.log("Successfully created an employee.");
      res.redirect("/products/show/"+product._id);
    }
  });
};

// Edit an employee
employeeController.edit = (req, res) => {
  Product.findOne({_id: req.params.id}).exec((err, product) => {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/products/edit", {product: product});
    }
  });
};

// Update an employee
employeeController.update = (req, res) => {
  Product.findByIdAndUpdate(req.params.id, { $set: { name: req.body.name, address: req.body.address, position: req.body.position, salary: req.body.salary }}, { new: true }, function (err, product) {
    if (err) {
      console.log(err);
      res.render("../views/products/edit", {product: req.body});
    }
    res.redirect("/products/show/"+product._id);
  });
};

// Delete an employee
employeeController.delete = (req, res) => {
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

module.exports = employeeController;
