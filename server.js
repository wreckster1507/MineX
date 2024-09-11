import express from "express";
import bodyParser from "body-parser";
import ConnectDB from "./util/ConnectDB.js";
import ShiftLogRouter from "./routes/ShifLogFormRoutes.js";
import GenerateSummaryRouter from "./routes/GenerateSummaryRoute.js";
import cors from "cors";

const app = express();
app.use(bodyParser.json());

app.use(cors());

ConnectDB();
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use("/api", ShiftLogRouter);
app.use("/", GenerateSummaryRouter);

app.listen(5000, () => console.log("Server is running on port:5000"));
