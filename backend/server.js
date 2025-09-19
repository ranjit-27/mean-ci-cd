const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
require("dotenv").config();
const app=express();
const port=process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const authRouter=require("./routes/auth");
app.use("/auth",authRouter);
const uri=process.env.MONGO_URI || "mongodb://localhost:27017/ecommerce";

mongoose.connect(uri)
.then(()=>console.log("MongoDB connected"))
.catch(err=>console.log(err));

app.get("/",(req,res)=>{
    res.send("E-commerce API is running");
});


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
}); 