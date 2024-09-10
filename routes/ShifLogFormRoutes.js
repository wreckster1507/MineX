import express from "express";
import {
  createShiftLog,
  getShiftLogs,
} from "../controllers/ShiftLogFormController.js";

const ShiftLogRouter = express.Router();

// POST a new ShiftLog
ShiftLogRouter.post("/shiftLogs", createShiftLog);

// GET all ShiftLogs
ShiftLogRouter.get("/shiftLogs", getShiftLogs);

export default ShiftLogRouter;
