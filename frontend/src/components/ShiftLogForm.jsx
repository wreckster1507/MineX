import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";

const ShiftLogForm = () => {
  const navigate = useNavigate();
  const [shiftLogData, setShiftLogData] = useState({
    date: "",
    shift: "",
    productionData: {
      totalTonnageMined: "",
      activeMachines: "",
      machineDowntime: "",
      additionalNotes: "",
    },
    safetyReports: {
      incidents: "",
      nearMisses: "",
      hazardsIdentified: "",
    },
    workProgress: {
      completedTasks: "",
      ongoingWork: "",
      upcomingWork: "",
    },
    machineStatus: {
      excavator: "",
      conveyor: "",
      crusher: "",
    },
    personnelInformation: {
      shiftSupervisor: "",
      keyPersonnelChanges: "",
    },
    notesForIncomingShift: "",
    signedBy: "",
    time: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShiftLogData((prevData) => {
      const [section, field] = name.split(".");
      if (field) {
        return {
          ...prevData,
          [section]: {
            ...prevData[section],
            [field]: value,
          },
        };
      }
      return { ...prevData, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://mine-x-server-api.onrender.com/api/shiftLogs",
        shiftLogData,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      alert("Shift log submitted successfully");
      navigate("/dashboard"); // Redirect to dashboard after successful submission
    } catch (err) {
      console.error("Error submitting shift log:", err);
      alert("Error submitting shift log. Please try again.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg m-2">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Submit Shift Log
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-700"
              >
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={shiftLogData.date}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>
            <div>
              <label
                htmlFor="shift"
                className="block text-sm font-medium text-gray-700"
              >
                Shift
              </label>
              <select
                id="shift"
                name="shift"
                value={shiftLogData.shift}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              >
                <option value="">Select Shift</option>
                <option value="Morning">Morning</option>
                <option value="Afternoon">Afternoon</option>
                <option value="Night">Night</option>
              </select>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Production Data
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="totalTonnageMined"
                  className="block text-sm font-medium text-gray-700"
                >
                  Total Tonnage Mined
                </label>
                <input
                  type="number"
                  id="totalTonnageMined"
                  name="productionData.totalTonnageMined"
                  value={shiftLogData.productionData.totalTonnageMined}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label
                  htmlFor="activeMachines"
                  className="block text-sm font-medium text-gray-700"
                >
                  Active Machines
                </label>
                <input
                  type="text"
                  id="activeMachines"
                  name="productionData.activeMachines"
                  value={shiftLogData.productionData.activeMachines}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label
                  htmlFor="machineDowntime"
                  className="block text-sm font-medium text-gray-700"
                >
                  Machine Downtime
                </label>
                <input
                  type="text"
                  id="machineDowntime"
                  name="productionData.machineDowntime"
                  value={shiftLogData.productionData.machineDowntime}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label
                  htmlFor="additionalNotes"
                  className="block text-sm font-medium text-gray-700"
                >
                  Additional Notes
                </label>
                <textarea
                  id="additionalNotes"
                  name="productionData.additionalNotes"
                  value={shiftLogData.productionData.additionalNotes}
                  onChange={handleChange}
                  rows="3"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                ></textarea>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Safety Reports
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label
                  htmlFor="incidents"
                  className="block text-sm font-medium text-gray-700"
                >
                  Incidents
                </label>
                <textarea
                  id="incidents"
                  name="safetyReports.incidents"
                  value={shiftLogData.safetyReports.incidents}
                  onChange={handleChange}
                  rows="3"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                ></textarea>
              </div>
              <div>
                <label
                  htmlFor="nearMisses"
                  className="block text-sm font-medium text-gray-700"
                >
                  Near Misses
                </label>
                <textarea
                  id="nearMisses"
                  name="safetyReports.nearMisses"
                  value={shiftLogData.safetyReports.nearMisses}
                  onChange={handleChange}
                  rows="3"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                ></textarea>
              </div>
              <div>
                <label
                  htmlFor="hazardsIdentified"
                  className="block text-sm font-medium text-gray-700"
                >
                  Hazards Identified
                </label>
                <textarea
                  id="hazardsIdentified"
                  name="safetyReports.hazardsIdentified"
                  value={shiftLogData.safetyReports.hazardsIdentified}
                  onChange={handleChange}
                  rows="3"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                ></textarea>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Work Progress
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label
                  htmlFor="completedTasks"
                  className="block text-sm font-medium text-gray-700"
                >
                  Completed Tasks
                </label>
                <textarea
                  id="completedTasks"
                  name="workProgress.completedTasks"
                  value={shiftLogData.workProgress.completedTasks}
                  onChange={handleChange}
                  rows="3"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                ></textarea>
              </div>
              <div>
                <label
                  htmlFor="ongoingWork"
                  className="block text-sm font-medium text-gray-700"
                >
                  Ongoing Work
                </label>
                <textarea
                  id="ongoingWork"
                  name="workProgress.ongoingWork"
                  value={shiftLogData.workProgress.ongoingWork}
                  onChange={handleChange}
                  rows="3"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                ></textarea>
              </div>
              <div>
                <label
                  htmlFor="upcomingWork"
                  className="block text-sm font-medium text-gray-700"
                >
                  Upcoming Work
                </label>
                <textarea
                  id="upcomingWork"
                  name="workProgress.upcomingWork"
                  value={shiftLogData.workProgress.upcomingWork}
                  onChange={handleChange}
                  rows="3"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                ></textarea>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Machine Status
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label
                  htmlFor="excavator"
                  className="block text-sm font-medium text-gray-700"
                >
                  Excavator Status
                </label>
                <input
                  type="text"
                  id="excavator"
                  name="machineStatus.excavator"
                  value={shiftLogData.machineStatus.excavator}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label
                  htmlFor="conveyor"
                  className="block text-sm font-medium text-gray-700"
                >
                  Conveyor Status
                </label>
                <input
                  type="text"
                  id="conveyor"
                  name="machineStatus.conveyor"
                  value={shiftLogData.machineStatus.conveyor}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label
                  htmlFor="crusher"
                  className="block text-sm font-medium text-gray-700"
                >
                  Crusher Status
                </label>
                <input
                  type="text"
                  id="crusher"
                  name="machineStatus.crusher"
                  value={shiftLogData.machineStatus.crusher}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Personnel Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="shiftSupervisor"
                  className="block text-sm font-medium text-gray-700"
                >
                  Shift Supervisor
                </label>
                <input
                  type="text"
                  id="shiftSupervisor"
                  name="personnelInformation.shiftSupervisor"
                  value={shiftLogData.personnelInformation.shiftSupervisor}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label
                  htmlFor="keyPersonnelChanges"
                  className="block text-sm font-medium text-gray-700"
                >
                  Key Personnel Changes
                </label>
                <textarea
                  id="keyPersonnelChanges"
                  name="personnelInformation.keyPersonnelChanges"
                  value={shiftLogData.personnelInformation.keyPersonnelChanges}
                  onChange={handleChange}
                  rows="3"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                ></textarea>
              </div>
            </div>
          </div>

          <div>
            <label
              htmlFor="notesForIncomingShift"
              className="block text-sm font-medium text-gray-700"
            >
              Notes for Incoming Shift
            </label>
            <textarea
              id="notesForIncomingShift"
              name="notesForIncomingShift"
              value={shiftLogData.notesForIncomingShift}
              onChange={handleChange}
              rows="4"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            ></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="signedBy"
                className="block text-sm font-medium text-gray-700"
              >
                Signed By
              </label>
              <input
                type="text"
                id="signedBy"
                name="signedBy"
                value={shiftLogData.signedBy}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label
                htmlFor="time"
                className="block text-sm font-medium text-gray-700"
              >
                Time
              </label>
              <input
                type="time"
                id="time"
                name="time"
                value={shiftLogData.time}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Submit Shift Log
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShiftLogForm;
