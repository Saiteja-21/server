const express=require('express') 
const {addTocart}=require('../controllers/Cart.js')
const {removeFromcart}=require('../controllers/Cart.js')
const {getCart}=require('../controllers/Cart.js')

const router=express.Router();
router.post('/add',addTocart)
router.post('/remove',removeFromcart)
router.post('/getall',getCart)

module.exports=router;