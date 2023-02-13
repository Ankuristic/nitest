const mongoose = require("mongoose");
const Category = require("../models/Category");

const categoryController = {};

// Show list of  category
categoryController.list = (req, res) => {
  Category.find({}).exec((err, categorys) => {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/categorys/index", {categorys: categorys});
    }
  });
};

//pagination  of the product list

categoryController.paginate = (req,res) => {
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


// Show by id
categoryController.show = (req, res) => {
  Category.findOne({_id: req.params.id}).exec((err, category) => {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/categorys/show", {category: category});
    }
  });
};

// Create new category
categoryController.create = (req, res) => {
  res.render("../views/categorys/create");
};

// Save new category
categoryController.save = (req, res) => {
  const category = new   Category(req.body);

  category.save((err) => {
    if(err) {
      console.log(err);
      res.render("../views/categorys/create");
    } else {
      console.log("Successfully created an employee.");
      res.redirect("/categorys/show/"+category._id);
    }
  });
};

// Edit an category
categoryController.edit = (req, res) => {
  Category.findOne({_id: req.params.id}).exec((err, category) => {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/categorys/edit", {category: category});
    }
  });
};

// Update an category
categoryController.update = (req, res) => {
  Category.findByIdAndUpdate(req.params.id, { $set: { name: req.body.name, address: req.body.address, position: req.body.position, salary: req.body.salary }}, { new: true }, function (err, category) {
    if (err) {
      console.log(err);
      res.render("../views/catgorys/edit", {category: req.body});
    }
    res.redirect("/categorys/show/"+category._id);
  });
};

// Delete an category
categoryController.delete = (req, res) => {
  Category.remove({_id: req.params.id}, (err) => {
    if (err) {
      console.log(err);
    }
    else {
      console.log("category deleted!");
      res.redirect("/categorys");
    }
  });
};

module.exports = categoryController;
