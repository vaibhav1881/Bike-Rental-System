const nodemailer = require("nodemailer");

// Send payment confirmation email
const sendPaymentConfirmation = async (req, res) => {
  const { email, name } = req.body;

  // Configure the transporter for Nodemailer
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "vrbhagwat9022@gmail.com", // replace with your email
      pass: "nwodvvasnltmuhxh", // replace with your email password or app password
    },
  });

  // Email options
  const mailOptions = {
    from: "vrbhagwat9022@gmail.com", // replace with your email
    to: email,
    subject: "Payment Confirmation - Bike Rental Service",
    text: `Dear ${name},\n\nThank you for your payment! Your bike rental is confirmed.\n\nBest regards,\nBike Rental Service`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Payment confirmation email sent!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send confirmation email" });
  }
};

module.exports = { sendPaymentConfirmation };
