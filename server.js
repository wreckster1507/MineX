import express from "express";
import bodyParser from "body-parser";
import ConnectDB from "./util/ConnectDB.js";
import ShiftLogRouter from "./routes/ShifLogFormRoutes.js";
const app = express();
app.use(bodyParser.json());

ConnectDB();
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use("/api", ShiftLogRouter);
app.listen(3000, () => console.log("Server is running on port:3000"));
