const Product = require("../model/productModel");

//add Product Details

const addProduct = async (req, res) => {
  try {
    const newProduct = new Product({
      productName: req.body.productName,
      cost: req.body.cost,
      about: req.body.about,
      imageUrl: req.body.imageUrl,
      categories: req.body.categories,
      quantity: req.body.quantity,
      checkbox: req.body.checkbox,
    });
    await newProduct.save();

    res.status(200).json({ message: "Product Added Successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed add Product " });
  }
};

const getProducts = async (req, res) => {
  try {
    const allProducts = await Product.find();
    if (!allProducts) {
      res.status(404).json({ message: "Products Not Fount" });
    }

    res.status(200).json({ data: allProducts });
  } catch (err) {
    res.status(500).json({ message: "failed to fetch product details" });
  }
};

//delete product based on ID

const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      res.status(404).json({
        message: "Product not found , please check correct product ID",
      });
    }

    res.status(200).json({ message: "Product deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to deleted  product" });
  }
};

//get product details based on ID
const getProduct=async(req, res)=>{

  try {
    const product=await Product.findById(req.params.id);
     if(!product){
      res.status(404).json({message:"product not found"})
    }
    
    res.status(200).json({product})
  } catch (error) {
    
    res.status(500).json({message:"server not found"})
  }
}



// api to update product based on ID
const updateProduct = async (req, res) => {
  try {
   const  updatedProductDetails=await Product.findByIdAndUpdate(
      req.params.id,
      {
        productName: req.body.productName,
        cost: req.body.cost,
        about: req.body.about,
        imageUrl: req.body.imageUrl,
        categories: req.body.categories,
        quantity: req.body.quantity,
        checkbox: req.body.checkbox,
      },
      { new: true },
    );

    if(!updatedProductDetails){
      res.status(404).json({message:"product not found"})
    }

    res.status(200).json({message:"updated successfully"})
  } catch (error) {
    res.status(500).json({message:"failed to update product details"})
  }
};

module.exports = {  getProduct,addProduct, getProducts, deleteProduct,updateProduct  };
