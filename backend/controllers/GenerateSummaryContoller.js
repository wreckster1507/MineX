import fetch, { Headers } from "node-fetch"; // Ensure this import matches your node-fetch version
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

globalThis.fetch = fetch;
globalThis.Headers = Headers; // Only necessary if using v2.x and `Headers` is required by @google/generative-ai

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Route to generate summary
const generateSummaryGemini = async (req, res) => {
  const { shiftLog } = req.body;

  try {
    const prompt = `Summarize the following shift log:\n\n${JSON.stringify(
      shiftLog,
      null,
      2
    )}`;
    const result = await model.generateContent(prompt);
    console.log(result.response.text());
    const importantData = {
      totalTonnageMined: shiftLog.productionData.totalTonnageMined,
      activeMachines: shiftLog.productionData.activeMachines,
      machineDowntime: shiftLog.productionData.machineDowntime,
      incidents: shiftLog.safetyReports.incidents,
      nearMisses: shiftLog.safetyReports.nearMisses,
      hazardsIdentified: shiftLog.safetyReports.hazardsIdentified,
    };



    res.json({ summary: result.response.text(), importantData });
  } catch (error) {
    console.error("Error generating summary:", error);
    res.status(500).json({ error: "Error generating summary" });
  }
};

export default generateSummaryGemini;
