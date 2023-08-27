const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse request body as JSON

const transporter = nodemailer.createTransport({
  host: "smtp.wp.pl",
  port: 465,
  secure: true, // use TLS
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
  tls: {
    // do not fail on invalid certs
    rejectUnauthorized: false,
  },
});

// Verify connection configuration
transporter.verify(function (error, success) {
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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
