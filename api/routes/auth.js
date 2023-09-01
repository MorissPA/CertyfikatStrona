// routes/auth.js
const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

// Logowanie stałego użytkownika
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Sprawdzenie nazwy użytkownika i hasła zgodnie z wartościami w pliku .env
  if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
    const token = jwt.sign({ id: "admin" }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });
    return res.json({ token });
  }
  
  return res.status(400).json({ error: 'Invalid username or password' });
});

module.exports = router;
