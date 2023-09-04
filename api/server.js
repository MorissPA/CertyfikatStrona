require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const productRoutes = require('./routes/products');
const authRoutes = require('./routes/auth');
const emailController = require('./emailController'); // Importujemy kontroler e-mail

const app = express();

// Konfiguracja CORS
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:4000'],
  credentials: true,
}));

// Middleware
app.use(express.json());

// MongoDB setup
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', (error) => console.error('MongoDB Error:', error));
db.once('open', () => console.log('Connected to MongoDB'));

// API Routes
app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);

// Email Route
app.post('/send', emailController.sendEmail);  // Używamy funkcji z kontrolera e-mail

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
