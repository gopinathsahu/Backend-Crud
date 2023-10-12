require('dotenv').config();
const express=require('express');
const app=express();
const ConnectedToDb=require('./Database/database.js');
ConnectedToDb();
const cors=require('cors');
   const userrouter=require('./Router/router.js');



app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.use('/',userrouter);
app.use('/createuser',userrouter);
//app.use('/createuser',createuser);
app.use('/getuser',userrouter);
module.exports=app;