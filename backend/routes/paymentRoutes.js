const express = require("express");
const { sendPaymentConfirmation } = require("../controllers/paymentController");
const router = express.Router();

// Route to send payment confirmation email
router.post("/confirm", sendPaymentConfirmation);

module.exports = router;
