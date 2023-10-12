const user = require('../Schema/UserSchema.js');

exports.home = (req, res) => {
    res.send('Welcome to my Backend Project.........');
};

// to create dataq in the database
exports.createuser = async (req, res) => {
    try {
        const { name, email, Contact_Number } = req.body;
       
        const User = await user.create({
            name,
            email,
            Contact_Number
        });
        res.status(201).json({
            success: true,
            message: "you data is successfully stored in the db.....",
            User
        })

    } catch (error) {
        console.log("Error is occured.....", error);
        res.status(400).json({
            success: false,
            message: "Error is Occured...."
        });
    }
}
exports.getUser=async(req,res)=>{
                try {
                   const users=  await user.find({});
                   res.status(201).json({
                    success: true,
                    message: "you data is successfully stored in the db.....",
                    users
                })

                } catch (error) {
                    console.log("ERROR...",error);
                    res.status(400).json({
                        success: false,
                        message: "Error is Occured...."
                    });
                }
}
exports.edituser=async(req,res)=>{
                      const useredit= req.params.id;
                         const edit=await user.findByIdAndUpdate(useredit,req.body);
                         try {
                            res.status(201).json({
                                success: true,
                                message: "your data edited successfully........",
                                edit
                            })
                         } catch (error) {
                            
                                console.log("Error is occured.....", error);
                                res.status(400).json({
                                    success: false,
                                    message: "Error is Occured...."
                                });
                         }
                    }
 exports.deleteuser=async(req,res)=>{
              const deleteuser=       req.params.id;
           const userdeleted=   await user.findByIdAndDelete(deleteuser);
           try {
            res.status(201).json({
                success: true,
                message: "you data is successfully deleted from  the db.....",
            userdeleted
            })
           } catch (error) {
            console.log("Error is occured.....", error);
        res.status(400).json({
            success: false,
            message: "Error is Occured...."
           })
 }                   
}