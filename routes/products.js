const express = require("express");

const products = require("../controllers/products");
const router = express.Router();

router.post("/create",products.createProducts);
router.get("/",products.getProducts);
router.get("/products/:id",products.getProductsAll);
router.post("/:id",products.update);
router.delete("/:id",products.deleteProducts);


module.exports = router;
