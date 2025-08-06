const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../frontend')));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === 'OPTIONS') return res.sendStatus(204);
  next();
});

app.post('/payment-submit', async (req, res) => {
  const { email, hash, walletAddress, network, planPrice, planName, date } = req.body;
  if (!email || !hash || !planPrice || !planName || !walletAddress || !network) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { 
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
       }
    });

    await transporter.sendMail({
      from: `Payment Gateway <${process.env.GMAIL_USER}>`,
      replyTo: email,
      to: process.env.ADMIN_EMAIL,
      subject: `Payment Receipt - ${planName}`,
      html: `
  <h2>Payment Receipt - Flash USDT</h2>
  <table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%;">
    <tr>
      <th align="left">Plan Name</th>
      <td>${planName}</td>
    </tr>
    <tr>
      <th align="left">Plan Price (USDT)</th>
      <td>${planPrice}</td>
    </tr>
    <tr>
      <th align="left">Wallet Address (User)</th>
      <td>${walletAddress}</td>
    </tr>
    <tr>
      <th align="left">Network (User)</th>
      <td>${network}</td>
    </tr>
    <tr>
      <th align="left">Transaction Hash</th>
      <td>${hash}</td>
    </tr>
    <tr>
      <th align="left">Email</th>
      <td>${email}</td>
    </tr>
    <tr>
      <th align="left">Date</th>
      <td>${date || new Date().toLocaleString()}</td>
    </tr>
  </table>
  <p style="margin-top:20px; font-size: 14px; color: gray;">
    This is an automated receipt for your payment. Please keep it for your records.
  </p>
`
    });

    res.status(200).json({ message: 'Email Sent Successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// ✅ Fix for Express 5+ catch-all route
app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.listen(3000, () => console.log('🚀 Server running at http://localhost:3000'));