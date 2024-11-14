const express = require("express");
const {
  getAllBikes,
  addBike,
  updateBike,
  deleteBike,
} = require("../controllers/bikeController");
const router = express.Router();

// Get all available bikes
router.get("/", getAllBikes);

// Admin routes
router.post("/add", addBike); // Admin only
router.put("/update/:id", updateBike); // Admin only
router.delete("/delete/:id", deleteBike); // Admin only

module.exports = router;
