import mongoose from "mongoose";

const productSchema = new mongoose.Schema({

    

},{timeseries: true})

export default mongoose.model("Product", productSchema);