const mongoose=require('mongoose');

const ConnectedToDb=async ()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/backend-project',  {useUnifiedTopology: true,
        useNewUrlParser: true});
    try {
       console.log("database is connected.......");
    } catch (error) {
        console.log("ERROR:",error);
        throw error;
    }
}
module.exports=ConnectedToDb;