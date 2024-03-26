const express=require('express')
const {SaveUser}=require('../controllers/User.js')
const {userlogin}=require('../controllers/User.js')

const router=express.Router()

router.post('/signup',SaveUser)
router.post('/login',userlogin)


module.exports=router