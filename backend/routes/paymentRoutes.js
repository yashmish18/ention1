const express = require('express');
const paymentController = require('../controllers/paymentController');
const router = express.Router();

router.post('/order', paymentController.createOrder);
router.post('/verify', paymentController.verifyPayment);
router.post('/webhook', paymentController.webhook); // Optional

module.exports = router; 