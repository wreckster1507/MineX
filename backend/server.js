import express from "express";
import bodyParser from "body-parser";
import ConnectDB from "./util/ConnectDB.js";
import ShiftLogRouter from "./routes/ShifLogFormRoutes.js";
import GenerateSummaryRouter from "./routes/GenerateSummaryRoute.js";
import cors from "cors";
import dotenv from "dotenv";
import cron from "node-cron";
import fetch from "node-fetch"; // Install node-fetch if you don't have it
import authRoutes from './routes/authRoutes.js'; // Import authentication routes


dotenv.config();


const app = express();

// Parse incoming requests data
app.use(bodyParser.json());

// Allow cross-origin requests
app.use(cors());

// Connect to the database
ConnectDB();
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api", ShiftLogRouter);  // Use ShiftLogRouter 
app.use("/", GenerateSummaryRouter);  // Use GenerateSummaryRouter
app.use('/auth', authRoutes); // Use authentication routes

// Cron job to ping the server every 10 minutes
cron.schedule("*/10 * * * *", async () => {
  try {
    await fetch(process.env.CALLBACK_URL);
    console.log("Pinged  successfully");
  } catch (error) {
    console.error("Error pinging ", error);
  }
});

app.listen(process.env.PORT, () =>
  console.log(`Server is running on port: ${process.env.PORT}`)
);
