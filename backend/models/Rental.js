const mongoose = require("mongoose");

const rentalSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  bike: { type: mongoose.Schema.Types.ObjectId, ref: "Bike", required: true },
  hours: { type: Number, required: true },
  totalAmount: { type: Number, required: true },
  paymentStatus: { type: String, default: "Pending" },
  rentalDate: { type: Date, default: Date.now },
  paid: { type: Boolean, default: false }, // New field to track payment status
});

module.exports = mongoose.model("Rental", rentalSchema);
