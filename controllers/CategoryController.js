const mongoose = require("mongoose");
const Category = require("../models/Category");

const categoryController = {};

// Show list of employees
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

// Show employee by id
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

// Create new employee
categoryController.create = (req, res) => {
  res.render("../views/categorys/create");
};

// Save new employee
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

// Edit an employee
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

// Update an employee
categoryController.update = (req, res) => {
  Category.findByIdAndUpdate(req.params.id, { $set: { name: req.body.name, address: req.body.address, position: req.body.position, salary: req.body.salary }}, { new: true }, function (err, category) {
    if (err) {
      console.log(err);
      res.render("../views/catgorys/edit", {category: req.body});
    }
    res.redirect("/categorys/show/"+category._id);
  });
};

// Delete an employee
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
