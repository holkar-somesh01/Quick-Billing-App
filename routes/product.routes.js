const router = require("express").Router()
const productController = require("./../controller/product.controller")
router
    .get("/fetch-post", productController.GetAllProducts)
    .post("/add-post", productController.AddProduct)
    .put("/update-post/:id", productController.UpdateProduct)
    .delete("/delete-post/:id", productController.DeleteProdcut)

module.exports = router