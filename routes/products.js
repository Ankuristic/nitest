const express = require('express');
const router = express.Router();
const product = require("../controllers/ProductController");

// Get all employees
router.get('/', (req, res) => {
  product.list(req, res);
});

// Get single employee by id
router.get('/show/:id', (req, res) => {
  product.show(req, res);
});

// Create employee
router.get('/create', (req, res) => {
  product.create(req, res);
});

// Save employee
router.post('/save', (req, res) => {
  product.save(req, res);
});

// Edit employee
router.get('/edit/:id', (req, res) => {
  product.edit(req, res);
});
// paginate product
router.get('/paginate', (req, res) => {
  product.edit(req, res);
});
// Edit update
router.post('/update/:id', (req, res) => {
  product.update(req, res);
});

// Edit update
router.post('/delete/:id', (req, res, next) => {
  product.delete(req, res);
});

module.exports = router;
