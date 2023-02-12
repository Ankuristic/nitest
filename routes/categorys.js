const express = require('express');
const router = express.Router();
const category = require("../controllers/CategoryController");

// Get all employees
router.get('/', (req, res) => {
  category.list(req, res);
});

// Get single employee by id
router.get('/show/:id', (req, res) => {
  category.show(req, res);
});

// Create employee
router.get('/create', (req, res) => {
    category.create(req, res);
});

// Save employee
router.post('/save', (req, res) => {
    category.save(req, res);
});

// Edit employee
router.get('/edit/:id', (req, res) => {
    category.edit(req, res);
});

// Edit update
router.post('/update/:id', (req, res) => {
    category.update(req, res);
});

// Edit update
router.post('/delete/:id', (req, res, next) => {
    category.delete(req, res);
});

module.exports = router;
