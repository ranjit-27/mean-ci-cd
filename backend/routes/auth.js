const router=require("express").Router();
const User=require("../models/user.model");

router.route("/signup").post(async(req,res)=>{
    const {username,password}=req.body;
    if(!username || !password){
        return res.status(400).json({message:"Username and password are required"});
    }
    const newUser=new User({username,password:await bcrypt.hash(password,10)});
    try{
        await newUser.save();
        res.status(201).json({message:"User created successfully"});
    }catch(err){
        res.status(500).json({message:"Server error"});
    }
}); 
module.exports=router;