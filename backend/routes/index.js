const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('../swagger');
const authRoutes = require('./authRoutes');
const productRoutes = require('./productRoutes');
const orderRoutes = require('./orderRoutes');
const contactRoutes = require('./contact');
const cardsRoutes = require('./cards');
const deliveryRoutes = require('./deliveryRoutes');
const paymentRoutes = require('./paymentRoutes');
// Delivery and payments will be added later
const associateBackendRoutes = require('../../associate/ention-backend');

const router = express.Router();

// Swagger documentation route
router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs, {
  customCss: '.swagger-ui .topbar { display: none }',
  customSiteTitle: 'EnTion API Documentation'
}));

router.use('/auth', authRoutes);
router.use('/products', productRoutes);
router.use('/orders', orderRoutes);
router.use('/contact', contactRoutes);
router.use('/cards', cardsRoutes);
router.use('/delivery', deliveryRoutes);
router.use('/payments', paymentRoutes);
router.use('/', associateBackendRoutes);

module.exports = router; 