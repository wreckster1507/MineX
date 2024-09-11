import express from "express";
import generateSummaryGemini from "../controllers/GenerateSummaryContoller.js";

const GenerateSummaryRouter = express.Router();

// POST a new ShiftLog
GenerateSummaryRouter.post("/api/generateSummary", generateSummaryGemini);

export default GenerateSummaryRouter;
