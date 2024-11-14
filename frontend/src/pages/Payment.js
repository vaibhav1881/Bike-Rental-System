import React, { useState } from 'react';
import jsPDF from 'jspdf';
import axios from 'axios';

function Payment() {
  const [paymentDetails, setPaymentDetails] = useState({
    name: '',
    email: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  const handleChange = (e) => {
    setPaymentDetails({ ...paymentDetails, [e.target.name]: e.target.value });
  };

  const handlePayment = async () => {
    // Show success alert
    alert('Payment successful!');

    // Generate receipt PDF
    generateReceiptPDF();

    // Send payment confirmation email
    try {
      await axios.post('http://localhost:5000/api/payment/confirm', {
        email: paymentDetails.email,
        name: paymentDetails.name,
      });
      alert('Payment confirmation email sent!');
    } catch (error) {
      alert('Failed to send confirmation email.');
    }
  };

  const generateReceiptPDF = () => {
    const doc = new jsPDF();
    doc.text('Bike Rental Receipt', 10, 10);
    doc.text(`Name: ${paymentDetails.name}`, 10, 20);
    doc.text(`Email: ${paymentDetails.email}`, 10, 30);
    doc.text('Thank you for your payment!', 10, 40);
    doc.save('receipt.pdf');
  };

  return (
    <div>
      <h1>Payment Page</h1>
      <form>
        <div>
          <label>Name</label>
          <input type="text" name="name" value={paymentDetails.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" value={paymentDetails.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Card Number</label>
          <input type="text" name="cardNumber" value={paymentDetails.cardNumber} onChange={handleChange} required />
        </div>
        <div>
          <label>Expiration Date</label>
          <input type="text" name="expirationDate" value={paymentDetails.expirationDate} onChange={handleChange} required />
        </div>
        <div>
          <label>CVV</label>
          <input type="text" name="cvv" value={paymentDetails.cvv} onChange={handleChange} required />
        </div>
        <button type="button" onClick={handlePayment}>Make Payment</button>
      </form>
      <button onClick={generateReceiptPDF}>Download Receipt</button>
    </div>
  );
}

export default Payment;
