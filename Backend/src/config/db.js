import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const CONN_STR = process.env.CONN_STRING;
export const connectDB = async () => {
  try {
    await mongoose.connect(CONN_STR);
    console.log("MONGODB CONNECTED SUCCESSFULLY!");
  } catch (error) {
    console.log("Error connecting to MONGODB", error.message);
  }
};
