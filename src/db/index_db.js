import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";

const connectDB = async () => {
  try {
    const connectionIstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}` )
    console.log(`Connected to the ${connectionIstance.connection.host} database.`);
}catch(err){
    console.error("Error h bhai connecting to the database:", err);
    process.exit(1);
   
  }
}

export default connectDB;


