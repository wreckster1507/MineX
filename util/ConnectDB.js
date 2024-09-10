import mongoose from "mongoose";

export default async function ConnectDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://varunharinath:zFGY5gHfcoK1qhER@minexcluster.u7izz.mongodb.net/MineX",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log("Error while connecting to MongoDB", error);
  }
}
