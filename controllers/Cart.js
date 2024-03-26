const jwt=require('jsonwebtoken')
const User=require('../models/Users.js')


const addTocart=async(req,res)=>{
    
    productId=req.body.id  
    const token=req.headers.token
    let data=jwt.verify(token,'encrypt');
    const user=await User.findOne({_id:data.user.id})
    user.cartdata[productId]+=1 
    await User.findByIdAndUpdate({_id:data.user.id},{cartdata:user.cartdata})
    
   
}
const removeFromcart=async(req,res)=>{
    productId=req.body.id  
    const token=req.headers.token
    let data=jwt.verify(token,'encrypt');
    const user=await User.findOne({_id:data.user.id})
    user.cartdata[productId]-=1 
    await User.findByIdAndUpdate({_id:data.user.id},{cartdata:user.cartdata})
    
   

}

const getCart=async(req,res)=>{
    const token=req.headers.token
    const data=jwt.verify(token,'encrypt');
    let user=await User.findOne({_id:data.user.id})
    res.json(user.cartdata)


}

module.exports={
    addTocart:addTocart,
    removeFromcart:removeFromcart,
    getCart:getCart
}