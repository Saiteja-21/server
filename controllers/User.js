const User=require('../models/Users.js');
const jwt=require('jsonwebtoken')
const Product=require('../models/Product.js')

const SaveUser=async(req,res)=>{
    let user=await User.findOne({email:req.body.email})
    let products=await Product.find()
    if(user){
        return res.json({success:false,error:"user with same email exists"})
    }
    let cart={}
    products.forEach((product)=>{
        cart[product._id]=0
    })
    
    const newuser=new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        cartdata:cart

    }) 
    await newuser.save() 
    const data={
        user:{
            id:newuser.id
        }
    }

    const token=jwt.sign(data,'encrypt')
    res.json({token})


}

const userlogin=async(req,res)=>{
    let user=await User.findOne({email:req.body.email})
    if(user){
        if(req.body.password===user.password){
            const data={
                user:{
                    id:user.id
                }
            }
            const token=jwt.sign(data,'encrypt')
            res.json({token})
        }
        else{
            res.json({error:'wrong password'})
        }
        
    }
    else{
        res.json({error:"no email found"})
    }

}

module.exports={
    SaveUser:SaveUser,
    userlogin:userlogin
}