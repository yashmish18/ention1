const express = require('express');
const router = express.Router();

// Minimal route for dev
router.get('/', (req, res) => {
  res.json({ message: 'Cards route working!' });
});

module.exports = router; 