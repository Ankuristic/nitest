const express = require("express");

const categorys = require("../controllers/category");
const router = express.Router();
// console.log("products",router)

router.post("/create",categorys.createCategory);
// router.get("/",products.viewProduct);
// // router.get("/products/:id",products.getProductsAll);
// router.post("/:id",products.updateProduct);
// router.delete("/:id",products.deleteProduct);


module.exports = router;
 