const express = require('express');
const { body } = require('express-validator');
const validate = require('../middlewares/validateInput');
const { sendContactMail } = require('../controllers/contactController');
const router = express.Router();

router.post('/',
  validate([
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('message').notEmpty().withMessage('Message is required')
  ]),
  sendContactMail
);

module.exports = router; 