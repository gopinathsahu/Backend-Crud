const express=require('express');
const {home,createuser,getUser,edituser,deleteuser}=require('../Contoller/Contoller.js')

const router=express.Router();
router.get('/',home);
router.use('/createuser',createuser);
router.get('/getusers',getUser);
router.put('/edituser/:id',edituser)
router.delete('/deleteuser/:id',deleteuser);
module.exports=router;