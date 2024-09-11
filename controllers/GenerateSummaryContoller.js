import fetch from "node-fetch";
import { GoogleGenerativeAI } from "@google/generative-ai";
globalThis.fetch = fetch;
const genAI = new GoogleGenerativeAI("AIzaSyBTBl4XWZcm8QLLEXOl8xZkdApTqO4JLyY");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Route to generate summary
const generateSummaryGemini = async (req, res) => {
  const { shiftLog } = req.body;

  try {
    // const prompt = `Summarize the following shift log:\n\n${shiftLog}`;
    // const result = await model.generateContent(prompt);
    // console.log('Summary:', result.response.text());

    const prompt = `Summarize the following shift log:\n\n${JSON.stringify(
      shiftLog,
      null,
      2
    )}`; // Convert shiftLog object to string for prompt
    const result = await model.generateContent(prompt); // Generate summary

    // const summary = result?.candidates?.[0]?.output; // Extract the generated summary

    // Extract important data for graphs
    const importantData = {
      totalTonnageMined: shiftLog.productionData.totalTonnageMined,
      activeMachines: shiftLog.productionData.activeMachines,
      machineDowntime: shiftLog.productionData.machineDowntime,
      incidents: shiftLog.safetyReports.incidents,
      nearMisses: shiftLog.safetyReports.nearMisses,
      hazardsIdentified: shiftLog.safetyReports.hazardsIdentified,
    };
    // console.log("Summary:", result.response.text());

    res.json({ summary: result.response.text(), importantData });
    // res.json({ summary, importantData });
  } catch (error) {
    console.error("Error generating summary:", error);
    res.status(500).json({ error: "Error generating summary" });
  }
};

export default generateSummaryGemini;
