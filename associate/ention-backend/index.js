const express = require('express');
const associateRoute = require('./routes/associate');
const contactRoute = require('./routes/contact');
const cardsRoute = require('./routes/cards');

const router = express.Router();

router.use('/associate', associateRoute);
router.use('/contact', contactRoute);
router.use('/cards', cardsRoute);

module.exports = router; 