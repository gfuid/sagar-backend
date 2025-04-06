import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({

    name:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    description:{
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
    parentCategory:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
    },
},{timestamps: true})

export default mongoose.model("Category", categorySchema);