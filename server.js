import express from "express";
import bodyParser from "body-parser";
import ConnectDB from "./util/ConnectDB.js";
import ShiftLogRouter from "./routes/ShifLogFormRoutes.js";
import GenerateSummaryRouter from "./routes/GenerateSummaryRoute.js";
import cors from "cors";
import dotenv from "dotenv";
import cron from "node-cron";
import fetch from "node-fetch"; // Install node-fetch if you don't have it

dotenv.config();

const app = express();
app.use(bodyParser.json());

app.use(cors());

ConnectDB();
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use("/api", ShiftLogRouter);
app.use("/", GenerateSummaryRouter);

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
