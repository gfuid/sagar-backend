import mongoose from "mongoose";

const medicalSchema =new mongoose.Schema({

    name:{
        type:String,
        required:true,
    },
    
    description:{
        type:String,
        required:true,
    }



},{timeseries: true})

export const MedicalRecord = mongoose.model("MedicalRecord", medicalSchema);