import express from "express";
import mongoose from "mongoose";
import { configDotenv } from "dotenv";
import authRouter from '../api/routes/auth.route.js'
import path from 'path';
configDotenv();
mongoose.connect(process.env.MONGO).then(()=>{
    console.log("connected to db");
}).catch((err)=>{
    console.log("error",err)
})
const __dirname = path.resolve();
const app=express();
app.use(express.urlencoded())
app.use(express.json());

app.listen(3000,()=>{
    console.log("server is running on port 3000")
})

app.use('/api/auth',authRouter)
app.use(express.static(path.join(__dirname, '/client/dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
})
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  });
