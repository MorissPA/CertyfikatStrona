
const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
    const token = jwt.sign({ id: "admin" }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });
    return res.json({ token });
  }
  
  return res.status(400).json({ error: 'Invalid username or password' });
});

module.exports = router;
