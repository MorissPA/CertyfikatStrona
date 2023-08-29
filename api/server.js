//server.js
require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const productRoutes = require('./routes/products');
const authRoutes = require('./routes/auth'); // Dodaj to

const app = express();

// Konfiguracja CORS
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:4000'],
  credentials: true,
}));

// Middleware
app.use(express.json());

// Email setup
const transporter = nodemailer.createTransport({
  host: "smtp.wp.pl",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take our messages');
  }
});

app.post('/send', async (req, res) => {
  try {
    var name = req.body.name;
    var clientEmail = req.body.email; // Get the client's email from the request
    var subject = req.body.subject;
    var message = req.body.message;

    var mail = {
      from: `"${name}" <${process.env.EMAIL}>`, // Set the "From" address as the client's name and your email
      to: process.env.EMAIL, // Replace with your email address
      subject: `${name} - ${subject}`, // Add client's name to the subject
      text: `Client's Email: ${clientEmail}\n\n${message}`, // Include client's email in the message
    };

    // Send the email
    await transporter.sendMail(mail);

    res.json({
      status: 'success',
    });
  } catch (error) {
    console.error('Błąd wysyłania emaila:', error);
    res.status(500).json({
      status: 'error',
      message: 'Wystąpił błąd podczas wysyłania wiadomości email.',
    });
  }
});
// MongoDB setup
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', (error) => console.error('MongoDB Error:', error));
db.once('open', () => console.log('Connected to MongoDB'));

// Dodanie tras
app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes); // Dodaj to

// Middleware do obsługi błędów
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start serwera
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});