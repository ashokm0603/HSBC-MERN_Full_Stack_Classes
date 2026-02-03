const { getProduct,updateProduct, addProduct,getProducts, deleteProduct  }= require("../controller/productController");
const express=require("express")
const router=express.Router()


router.post("/add-product",addProduct) ;
router.get("/get-products",getProducts );
router.get("/get-product/:id",getProduct );
router.delete("/delete-product/:id",deleteProduct)
router.put("/update-product/:id", updateProduct)

module.exports=router;