import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export default async function ConnectDB() {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log("Error while connecting to MongoDB", error);
  }
}
