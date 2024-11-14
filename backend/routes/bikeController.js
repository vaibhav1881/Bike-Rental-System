const Bike = require("../models/Bike");

// Get all available bikes
const getAllBikes = async (req, res) => {
  try {
    const bikes = await Bike.find({ available: true });
    res.json(bikes);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve bikes" });
  }
};

// Admin: Add a new bike
const addBike = async (req, res) => {
  const { name, type, hourlyRate, available, image } = req.body;
  try {
    const bike = new Bike({ name, type, hourlyRate, available, image });
    await bike.save();
    res.status(201).json({ message: "Bike added successfully", bike });
  } catch (error) {
    res.status(500).json({ message: "Failed to add bike" });
  }
};

// Admin: Update bike details
const updateBike = async (req, res) => {
  try {
    const updatedBike = await Bike.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({ message: "Bike updated successfully", updatedBike });
  } catch (error) {
    res.status(500).json({ message: "Failed to update bike" });
  }
};

// Admin: Delete bike
const deleteBike = async (req, res) => {
  try {
    await Bike.findByIdAndDelete(req.params.id);
    res.json({ message: "Bike deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete bike" });
  }
};

module.exports = { getAllBikes, addBike, updateBike, deleteBike };
