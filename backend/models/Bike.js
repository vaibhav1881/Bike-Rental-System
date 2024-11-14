const mongoose = require("mongoose");

const bikeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  hourlyRate: { type: Number, required: true },
  available: { type: Boolean, default: true },
  image: { type: String }, // Optional, for a bike image URL
});

module.exports = mongoose.model("Bike", bikeSchema);
