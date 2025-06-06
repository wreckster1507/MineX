import mongoose from "mongoose";

const shiftLogSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  shift: {
    type: String,
    enum: ["Morning", "Afternoon", "Night"],
    required: true,
  },
  productionData: {
    totalTonnageMined: {
      type: Number,
      required: false,
    },
    activeMachines: {
      type: String,
      required: false,
    },
    machineDowntime: {
      type: String,
      required: false,
    },
    additionalNotes: {
      type: String,
      required: false,
    },
  },
  safetyReports: {
    incidents: {
      type: String,
      required: false,
    },
    nearMisses: {
      type: String,
      required: false,
    },
    hazardsIdentified: {
      type: String,
      required: false,
    },
  },
  workProgress: {
    completedTasks: {
      type: String,
      required: false,
    },
    ongoingWork: {
      type: String,
      required: false,
    },
    upcomingWork: {
      type: String,
      required: false,
    },
  },
  machineStatus: {
    excavator: {
      type: String,
      required: false,
    },
    conveyor: {
      type: String,
      required: false,
    },
    crusher: {
      type: String,
      required: false,
    },
  },
  personnelInformation: {
    shiftSupervisor: {
      type: String,
      required: false,
    },
    keyPersonnelChanges: {
      type: String,
      required: false,
    },
  },
  notesForIncomingShift: {
    type: String,
    required: false,
  },
  signedBy: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
});

const ShiftLogFormModel = mongoose.model("ShiftLogForm", shiftLogSchema);
export default ShiftLogFormModel;
