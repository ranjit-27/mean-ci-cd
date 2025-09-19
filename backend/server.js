// server.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Import your router
import authRouter from "./routes/auth.js";
app.use("/auth", authRouter);

const uri = process.env.MONGO_URI || "mongodb+srv://ranjithmadugula:<12345678>@cluster0.zhh59.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(uri)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("E-commerce API is running");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
