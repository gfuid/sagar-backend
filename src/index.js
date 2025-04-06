// require('dotenv').config({path: './.env'})

// import mongoose from 'mongoose';
import {DB_NAME} from './db/constants.js';
import connectDB from './db/index_db.js';
import dotenv from 'dotenv';

dotenv.config({
    path: './.env'
});

connectDB()
.then(()=>{
    app.listen(process.env.PORT|| 8000,()=>{
        console.log(`server is running at port :${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("MONGO db connection failed !!!",err)
})








/*
import express from 'express';
const app = express();

(async()=>{
    try{
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`,)
       app.on('error', (err) => {
        console.error('Error occurred:', err);
        throw err;
       })

       app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
       });


    }catch(err){
        console.log("error",err);
    }
})()
*/