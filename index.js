
const express=require('express');
const cors=require('cors')
const mongoose=require('mongoose')
const multer=require('multer')
const path=require('path')
const router=require('./routes/Product.js')
const userrouter=require('./routes/User.js')
const cartrouter=require('./routes/Cart.js')

const connectToDatabase=async()=>{
    return await mongoose.connect("mongodb+srv://saiteja:abc12@cluster0.rlojc0p.mongodb.net/ecommerce")

}

const port=8000;
const app=express();
app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
    res.send('welcome')
})

const storage=multer.diskStorage({
    destination:'./upload/images',
    filename:(req,file,cb)=>{
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload=multer({
    storage:storage
})
app.use('/images',express.static('upload/images'))
 
app.post("/upload",upload.single('product'),(req,res)=>{
    res.json({
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
})


app.use('/product',router)
app.use('/user',userrouter) 
app.use('/cart',cartrouter)



app.listen(port,async()=>{
    await connectToDatabase();
    console.log('started')

})

