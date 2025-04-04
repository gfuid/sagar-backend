import mongoose from "mongoose";

const HospitalSchema = new mongoose.Schema({

    name: { 
        type: String, 
        required: true,

     },
     address:{
        type:String,
        required:true,
     },
     addressLine2:{
        type:String,
     },
     city:{
        type:String,
        required:true
     },
     pincode:{
        type:String,
        required:true
     },
     specializedIn:[
      {
         type:String
      },
     ],
},{ timeseries: true });

export const Hospital = mongoose.model("Hospital", HospitalSchema);