import ShiftLogFormModel from "../models/ShiftLogFormModels.js";

// @desc    Create new ShiftLog
// @route   POST /api/shiftLogs
// @access  Private
export const createShiftLog = async (req, res) => {
  try {
    const shiftLog = new ShiftLogFormModel(req.body);
    const savedShiftLog = await shiftLog.save();
    res.status(201).json(savedShiftLog);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating shift log", error: error.message });
  }
};

// @desc    Get all ShiftLogs
// @route   GET /api/shiftLogs
// @access  Private
export const getShiftLogs = async (req, res) => {
  try {
    const shiftLogs = await ShiftLogFormModel.find();
    res.status(200).json(shiftLogs);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching shift logs", error: error.message });
  }
};
