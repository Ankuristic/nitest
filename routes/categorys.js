const express = require("express");

const products = require("../controllers/product");
const router = express.Router();
// console.log("products",router)

router.post("/create",products.createProduct);
router.get("/",products.viewProduct);
// router.get("/products/:id",products.getProductsAll);
router.post("/:id",products.updateProduct);
router.delete("/:id",products.deleteProduct);


module.exports = router;
 