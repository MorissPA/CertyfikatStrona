require('dotenv').config();
const express = require('express');
const cors = require('cors');
const emailController = require('./emailController'); 

const app = express();

// Konfiguracja CORS
app.use(cors({
  origin: ['http://localhost:5173'],
  credentials: true,
}));

// Middleware
app.use(express.json());


// Email Route
app.post('/send', emailController.sendEmail);

// Error Handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Server start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
