const express = require('express');
const router = express.Router();
const { signupUser, loginUser } = require('../controllers/authController');

router.post('/signup', signupUser);
router.post('/login', loginUser);
// Temporary test route
router.get('/test', (req, res) => {
  res.send('Auth route working!');
});

module.exports = router;
