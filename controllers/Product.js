const { get } = require('mongoose');
const Product=require('../models/Product.js')



 const  saveProducts=async(req,res)=>{
    const {image,category,brand,description,price}=req.body;
    const obj={
        image,
        category,
        brand,
        description,
        price
    }
    const product=new Product(obj)
    const savedproduct=await product.save()
    res.json({savedproduct})



}
const  deleteProduct=async(req,res)=>{
  const product=await Product.findOneAndDelete({id:req.body.id});
  res.json({
    deletedproduct:product
  })
  


}
const  getProducts=async(req,res)=>{
   const products=await Product.find()
   res.json({
    products
   })
    
  
  
  }


module.exports = {
    saveProducts: saveProducts,
    deleteProduct:deleteProduct,
    getProducts:getProducts
};