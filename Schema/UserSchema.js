const mongoose=require('mongoose');
const UserSchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true,'name is must required'],
        trim:true,
        MaxLength:[20,"maximum length is 20 character"],
      
        MinLength:[3,"minimum 3 character is required"]
    },
    email :{
        type:String,
         required:[true,'name is required'],
         maxLength :[50,'only enterwed lesshtne 50 char'],
         trim:true,
         unique:true

    },
    Contact_Number :{
        type:String,
         MinLength:[10,' 10 number is must  required'],
         trim:true,
         unique:true

    }


})
module.exports = mongoose.model('user',UserSchema);