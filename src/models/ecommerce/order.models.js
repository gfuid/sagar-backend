import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
    productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
    },
    quantity:{
        type: Number,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
},{timestamps: true})


const orderSchema = new mongoose.Schema({
    orderPrice:{
        type: Number,
        required: true,
    },
    customer:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    orderItems:{
        type: [orderItemSchema],
        required: true,
    },
    address:{
        type: String,
        required: true,

    },
    status:{
        type: String,
        enum: ['Pending', 'Delivered', 'Cancelled'],
        default: 'Pending',
    }
},{timestamps: true})

export default mongoose.model("Order", orderSchema);