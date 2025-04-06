import mongoose from "mongoose";

const PatientSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    diagnose:{
        type :String,
        required : true,
    },
    age:{
        type : Number,
        required : true,
    },
    addres:{
        type :String,
        required:true,
    },
    gender:{
        type:String,
        enum:["m","f","o"],
        required:true
    },
    bloodgroup:{
        type:String,
        required:true
    },
    admitted:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Hospital"
    }


},{ timeseries: true });

export const Patient = mongoose.model("Patient", PatientSchema);