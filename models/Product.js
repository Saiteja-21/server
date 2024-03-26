const mongoose=require('mongoose') 

const productSchema=new mongoose.Schema({
    image:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    brand:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    }
}) 

const Product= mongoose.model('products',productSchema)
module.exports=Product
