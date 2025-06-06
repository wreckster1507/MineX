import React, { useEffect, useState } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory
// import { Loader } from "lucide-react";
import Loader from "../loader/Loader";

const ShiftLogList = () => {
  const [shiftLogs, setShiftLogs] = useState([]);
  const [summaries, setSummaries] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [generateSummaryLoader, setGenerateSummaryLoader] = useState(false);
  const [expandedLogs, setExpandedLogs] = useState({});
  const navigate = useNavigate(); // Initialize navigate for navigation

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const response = await axios.get(
          "https://mine-x-server-api.onrender.com/api/shiftLogs",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setShiftLogs(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching shift logs:", err);
        setError("Failed to fetch shift logs. Please try again later.");
        setLoading(false);
      }
    };

    fetchLogs();
  }, []);

  const handleGenerateSummary = async (logId) => {
    setGenerateSummaryLoader(true);
    try {
      const log = shiftLogs.find((log) => log._id === logId);
      if (!log) return;

      const response = await axios.post(
        "https://mine-x-server-api.onrender.com/api/generateSummary",
        { shiftLog: log },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );

      const { summary, importantData } = response.data;
      navigate(`/summary/${logId}`, { state: { summary, importantData } }); // Use navigate for navigation
    } catch (err) {
      console.error("Error generating summary:", err);
    }
  };

  const exportLogToPDF = (log) => {
    const doc = new jsPDF();
    doc.setFontSize(12);
    let y = 10;

    doc.text(`Shift Log`, 10, y);
    y += 10;
    doc.text(`Date: ${log.date}`, 10, y);
    y += 10;
    doc.text(`Shift: ${log.shift}`, 10, y);
    y += 10;
    doc.text(
      `Total Tonnage Mined: ${log.productionData.totalTonnageMined}`,
      10,
      y
    );
    y += 10;
    doc.text(`Active Machines: ${log.productionData.activeMachines}`, 10, y);
    y += 10;
    doc.text(`Machine Downtime: ${log.productionData.machineDowntime}`, 10, y);
    y += 10;
    doc.text(`Additional Notes: ${log.productionData.additionalNotes}`, 10, y);
    y += 10;
    doc.text(`Incidents: ${log.safetyReports.incidents}`, 10, y);
    y += 10;
    doc.text(`Near Misses: ${log.safetyReports.nearMisses}`, 10, y);
    y += 10;
    doc.text(
      `Hazards Identified: ${log.safetyReports.hazardsIdentified}`,
      10,
      y
    );
    y += 10;
    doc.text(`Completed Tasks: ${log.workProgress.completedTasks}`, 10, y);
    y += 10;
    doc.text(`Ongoing Work: ${log.workProgress.ongoingWork}`, 10, y);
    y += 10;
    doc.text(`Upcoming Work: ${log.workProgress.upcomingWork}`, 10, y);
    y += 10;
    doc.text(
      `Machine Status: Excavator: ${log.machineStatus.excavator}, Conveyor: ${log.machineStatus.conveyor}, Crusher: ${log.machineStatus.crusher}`,
      10,
      y
    );
    y += 10;
    doc.text(
      `Shift Supervisor: ${log.personnelInformation.shiftSupervisor}`,
      10,
      y
    );
    y += 10;
    doc.text(
      `Key Personnel Changes: ${log.personnelInformation.keyPersonnelChanges}`,
      10,
      y
    );
    y += 10;
    doc.text(`Notes for Incoming Shift: ${log.notesForIncomingShift}`, 10, y);
    y += 10;
    doc.text(`Signed By: ${log.signedBy}`, 10, y);
    y += 10;
    doc.text(`Time: ${log.time}`, 10, y);

    if (summaries[log._id]) {
      y += 10;
      doc.text(`Summary: ${summaries[log._id]}`, 10, y);
    }

    doc.save(`shift_log_${log.date}.pdf`);
  };

  const exportLogToExcel = (log) => {
    const ws = XLSX.utils.json_to_sheet([
      {
        Date: log.date,
        Shift: log.shift,
        TotalTonnageMined: log.productionData.totalTonnageMined,
        ActiveMachines: log.productionData.activeMachines,
        MachineDowntime: log.productionData.machineDowntime,
        AdditionalNotes: log.productionData.additionalNotes,
        Incidents: log.safetyReports.incidents,
        NearMisses: log.safetyReports.nearMisses,
        HazardsIdentified: log.safetyReports.hazardsIdentified,
        CompletedTasks: log.workProgress.completedTasks,
        OngoingWork: log.workProgress.ongoingWork,
        UpcomingWork: log.workProgress.upcomingWork,
        MachineStatusExcavator: log.machineStatus.excavator,
        MachineStatusConveyor: log.machineStatus.conveyor,
        MachineStatusCrusher: log.machineStatus.crusher,
        ShiftSupervisor: log.personnelInformation.shiftSupervisor,
        KeyPersonnelChanges: log.personnelInformation.keyPersonnelChanges,
        NotesForIncomingShift: log.notesForIncomingShift,
        SignedBy: log.signedBy,
        Time: log.time,
        Summary: summaries[log._id] || "",
      },
    ]);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Shift Log");
    const wbout = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    saveAs(
      new Blob([wbout], { type: "application/octet-stream" }),
      `shift_log_${log.date}.xlsx`
    );
  };

  const exportAllToPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(12);

    shiftLogs.forEach((log, index) => {
      let y = 10;
      if (index > 0) doc.addPage();

      doc.text(`Shift Log ${index + 1}`, 10, y);
      y += 10;
      doc.text(`Date: ${log.date}`, 10, y);
      y += 10;
      doc.text(`Shift: ${log.shift}`, 10, y);
      y += 10;
      doc.text(
        `Total Tonnage Mined: ${log.productionData.totalTonnageMined}`,
        10,
        y
      );
      y += 10;
      doc.text(`Active Machines: ${log.productionData.activeMachines}`, 10, y);
      y += 10;
      doc.text(
        `Machine Downtime: ${log.productionData.machineDowntime}`,
        10,
        y
      );
      y += 10;
      doc.text(
        `Additional Notes: ${log.productionData.additionalNotes}`,
        10,
        y
      );
      y += 10;
      doc.text(`Incidents: ${log.safetyReports.incidents}`, 10, y);
      y += 10;
      doc.text(`Near Misses: ${log.safetyReports.nearMisses}`, 10, y);
      y += 10;
      doc.text(
        `Hazards Identified: ${log.safetyReports.hazardsIdentified}`,
        10,
        y
      );
      y += 10;
      doc.text(`Completed Tasks: ${log.workProgress.completedTasks}`, 10, y);
      y += 10;
      doc.text(`Ongoing Work: ${log.workProgress.ongoingWork}`, 10, y);
      y += 10;
      doc.text(`Upcoming Work: ${log.workProgress.upcomingWork}`, 10, y);
      y += 10;
      doc.text(
        `Machine Status: Excavator: ${log.machineStatus.excavator}, Conveyor: ${log.machineStatus.conveyor}, Crusher: ${log.machineStatus.crusher}`,
        10,
        y
      );
      y += 10;
      doc.text(
        `Shift Supervisor: ${log.personnelInformation.shiftSupervisor}`,
        10,
        y
      );
      y += 10;
      doc.text(
        `Key Personnel Changes: ${log.personnelInformation.keyPersonnelChanges}`,
        10,
        y
      );
      y += 10;
      doc.text(`Notes for Incoming Shift: ${log.notesForIncomingShift}`, 10, y);
      y += 10;
      doc.text(`Signed By: ${log.signedBy}`, 10, y);
      y += 10;
      doc.text(`Time: ${log.time}`, 10, y);

      if (summaries[log._id]) {
        y += 10;
        doc.text(`Summary: ${summaries[log._id]}`, 10, y);
      }
    });

    doc.save("shift_logs.pdf");
  };

  const exportAllToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(
      shiftLogs.map((log) => ({
        Date: log.date,
        Shift: log.shift,
        TotalTonnageMined: log.productionData.totalTonnageMined,
        ActiveMachines: log.productionData.activeMachines,
        MachineDowntime: log.productionData.machineDowntime,
        AdditionalNotes: log.productionData.additionalNotes,
        Incidents: log.safetyReports.incidents,
        NearMisses: log.safetyReports.nearMisses,
        HazardsIdentified: log.safetyReports.hazardsIdentified,
        CompletedTasks: log.workProgress.completedTasks,
        OngoingWork: log.workProgress.ongoingWork,
        UpcomingWork: log.workProgress.upcomingWork,
        MachineStatusExcavator: log.machineStatus.excavator,
        MachineStatusConveyor: log.machineStatus.conveyor,
        MachineStatusCrusher: log.machineStatus.crusher,
        ShiftSupervisor: log.personnelInformation.shiftSupervisor,
        KeyPersonnelChanges: log.personnelInformation.keyPersonnelChanges,
        NotesForIncomingShift: log.notesForIncomingShift,
        SignedBy: log.signedBy,
        Time: log.time,
        Summary: summaries[log._id] || "",
      }))
    );
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Shift Logs");
    const wbout = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    saveAs(
      new Blob([wbout], { type: "application/octet-stream" }),
      "shift_logs.xlsx"
    );
  };

  const toggleLogExpansion = (logId) => {
    setExpandedLogs((prev) => ({ ...prev, [logId]: !prev[logId] }));
  };

  if (loading) {
    return (
      // <div className="flex justify-center items-center h-screen">
      //   <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      // </div>
      <div className="flex justify-center items-center h-screen">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
        role="alert"
      >
        <strong className="font-bold">Error!</strong>
        <span className="block sm:inline"> {error}</span>
      </div>
    );
  }

  return (
    <div>
      <Navbar />

      <div className="container  mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Shift Logs</h1>
        <div className="mb-6 flex space-x-4">
          <button
            onClick={exportAllToPDF}
            className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
          >
            <DocumentTextIcon className="h-5 w-5 mr-2" />
            Export All to PDF
          </button>
          <button
            onClick={exportAllToExcel}
            className="flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300"
          >
            {/* <TableIcon className="h-5 w-5 mr-2" /> */}
            Export All to Excel
          </button>
        </div>
        <div className="space-y-6">
          {shiftLogs.map((log) => (
            <div
              key={log._id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <div
                className="flex justify-between items-center p-4 cursor-pointer bg-gray-50 hover:bg-gray-100 transition duration-300"
                onClick={() => toggleLogExpansion(log._id)}
              >
                <h2 className="text-xl font-semibold text-gray-800">
                  Shift Log for{" "}
                  <span className="text-blue-600 font-medium">
                    {new Intl.DateTimeFormat("en-GB", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    }).format(new Date(log.date))}
                  </span>{" "}
                  - Shift:{" "}
                  <span
                    className={
                      log.shift === "Morning"
                        ? "text-yellow-500"
                        : log.shift === "Afternoon"
                          ? "text-orange-500"
                          : log.shift === "Evening"
                            ? "text-purple-500"
                            : "text-gray-600"
                    }
                  >
                    {log.shift}
                  </span>
                </h2>
                {expandedLogs[log._id] ? (
                  <ChevronUpIcon className="h-6 w-6 text-gray-600" />
                ) : (
                  <ChevronDownIcon className="h-6 w-6 text-gray-600" />
                )}
              </div>
              {expandedLogs[log._id] && (
                <div className="p-4 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-gray-700">
                        Production Data
                      </h3>
                      <p>
                        <span className="font-medium">
                          Total Tonnage Mined:
                        </span>{" "}
                        {log.productionData.totalTonnageMined}
                      </p>
                      <p>
                        <span className="font-medium">Active Machines:</span>{" "}
                        {log.productionData.activeMachines}
                      </p>
                      <p>
                        <span className="font-medium">Machine Downtime:</span>{" "}
                        {log.productionData.machineDowntime}
                      </p>
                      <p>
                        <span className="font-medium">Additional Notes:</span>{" "}
                        {log.productionData.additionalNotes}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-gray-700">
                        Safety Reports
                      </h3>
                      <p>
                        <span className="font-medium">Incidents:</span>{" "}
                        {log.safetyReports.incidents}
                      </p>
                      <p>
                        <span className="font-medium">Near Misses:</span>{" "}
                        {log.safetyReports.nearMisses}
                      </p>
                      <p>
                        <span className="font-medium">Hazards Identified:</span>{" "}
                        {log.safetyReports.hazardsIdentified}
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-gray-700">
                      Work Progress
                    </h3>
                    <p>
                      <span className="font-medium">Completed Tasks:</span>{" "}
                      {log.workProgress.completedTasks}
                    </p>
                    <p>
                      <span className="font-medium">Ongoing Work:</span>{" "}
                      {log.workProgress.ongoingWork}
                    </p>
                    <p>
                      <span className="font-medium">Upcoming Work:</span>{" "}
                      {log.workProgress.upcomingWork}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-gray-700">
                      Machine Status
                    </h3>
                    <p>
                      <span className="font-medium">Excavator:</span>{" "}
                      {log.machineStatus.excavator}
                    </p>
                    <p>
                      <span className="font-medium">Conveyor:</span>{" "}
                      {log.machineStatus.conveyor}
                    </p>
                    <p>
                      <span className="font-medium">Crusher:</span>{" "}
                      {log.machineStatus.crusher}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-gray-700">
                      Personnel Information
                    </h3>
                    <p>
                      <span className="font-medium">Shift Supervisor:</span>{" "}
                      {log.personnelInformation.shiftSupervisor}
                    </p>
                    <p>
                      <span className="font-medium">
                        Key Personnel Changes:
                      </span>{" "}
                      {log.personnelInformation.keyPersonnelChanges}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-gray-700">
                      Additional Information
                    </h3>
                    <p>
                      <span className="font-medium">
                        Notes for Incoming Shift:
                      </span>{" "}
                      {log.notesForIncomingShift}
                    </p>
                    <p>
                      <span className="font-medium">Signed By:</span>{" "}
                      {log.signedBy}
                    </p>
                    <p>
                      <span className="font-medium">Time:</span> {log.time}
                    </p>
                  </div>
                  {summaries[log._id] && (
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-gray-700">
                        Summary
                      </h3>
                      <p>{summaries[log._id]}</p>
                    </div>
                  )}
                  <div className="mt-4 flex space-x-4">
                    <button
                      onClick={() => exportLogToPDF(log)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
                    >
                      <DocumentTextIcon className="h-5 w-5 mr-2" />
                      Export to PDF
                    </button>
                    <button
                      onClick={() => exportLogToExcel(log)}
                      className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300"
                    >
                      Export to Excel
                    </button>
                  </div>
                  <button
                    onClick={() => handleGenerateSummary(log._id)}
                    className={`mt-4 px-4 py-2 rounded-md transition duration-300 flex items-center justify-center ${generateSummaryLoader
                      ? "bg-indigo-500 text-white cursor-not-allowed"
                      : "bg-indigo-600 text-white hover:bg-indigo-700"
                      }`}
                    disabled={generateSummaryLoader}
                  >
                    {generateSummaryLoader
                      ? "Generating Reports..."
                      : summaries[log._id]
                        ? "Regenerate Summary"
                        : "Generate Summary"}
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShiftLogList;
