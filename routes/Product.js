const express=require('express')
const {saveProducts}=require('../controllers/Product.js')
const {deleteProduct}=require('../controllers/Product.js')
const {getProducts}=require('../controllers/Product.js')


const router=express.Router()

router.post('/save',saveProducts)
router.post('/remove',deleteProduct)
router.get('/getall',getProducts)


module.exports=router