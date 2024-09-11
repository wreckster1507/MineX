import express from "express";
import bodyParser from "body-parser";
import ConnectDB from "./util/ConnectDB.js";
import ShiftLogRouter from "./routes/ShifLogFormRoutes.js";
import GenerateSummaryRouter from "./routes/GenerateSummaryRoute.js";
import cors from "cors";
import dotenv from "dotenv";
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

app.listen(process.env.PORT, () =>
  console.log(`Server is running on port:${process.env.PORT}`)
);
