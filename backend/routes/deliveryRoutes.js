const express = require('express');
const { body, param } = require('express-validator');
const validate = require('../middlewares/validateInput');
const { protect, isAdmin } = require('../middlewares/authMiddleware');
const deliveryController = require('../controllers/deliveryController');
const router = express.Router();

/**
 * @swagger
 * /delivery:
 *   post:
 *     summary: Add delivery partner (Admin only)
 *     tags: [Delivery]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - phone
 *             properties:
 *               name:
 *                 type: string
 *                 description: Partner name
 *               phone:
 *                 type: string
 *                 description: Partner phone number
 *     responses:
 *       201:
 *         description: Delivery partner added successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 partner:
 *                   type: object
 *       400:
 *         description: Validation error or partner already exists
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       403:
 *         description: Admin access required
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.post('/',
  protect, isAdmin,
  validate([
    body('name').notEmpty().withMessage('Name is required'),
    body('phone').notEmpty().withMessage('Phone is required')
  ]),
  deliveryController.addPartner
);

/**
 * @swagger
 * /delivery:
 *   get:
 *     summary: List delivery partners (Admin only)
 *     tags: [Delivery]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of delivery partners
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 partners:
 *                   type: array
 *                   items:
 *                     type: object
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       403:
 *         description: Admin access required
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get('/', protect, isAdmin, deliveryController.listPartners);

/**
 * @swagger
 * /delivery/assign/{orderId}:
 *   put:
 *     summary: Assign delivery partner to order (Admin only)
 *     tags: [Delivery]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: orderId
 *         required: true
 *         schema:
 *           type: string
 *         description: Order ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - partnerId
 *             properties:
 *               partnerId:
 *                 type: string
 *                 description: Delivery partner ID
 *     responses:
 *       200:
 *         description: Order assigned successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 order:
 *                   $ref: '#/components/schemas/Order'
 *                 partner:
 *                   type: object
 *       400:
 *         description: Validation error or order already assigned
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       403:
 *         description: Admin access required
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       404:
 *         description: Order or partner not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.put('/assign/:orderId',
  protect, isAdmin,
  validate([
    param('orderId').isMongoId().withMessage('Valid order ID required'),
    body('partnerId').isMongoId().withMessage('Valid partner ID required')
  ]),
  deliveryController.assignOrder
);

/**
 * @swagger
 * /delivery/status/{orderId}:
 *   put:
 *     summary: Update delivery status (Admin only)
 *     tags: [Delivery]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: orderId
 *         required: true
 *         schema:
 *           type: string
 *         description: Order ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - status
 *             properties:
 *               status:
 *                 type: string
 *                 enum: [pending, picked, in-transit, delivered]
 *                 description: Delivery status
 *     responses:
 *       200:
 *         description: Delivery status updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 order:
 *                   $ref: '#/components/schemas/Order'
 *       400:
 *         description: Validation error or order not assigned
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       403:
 *         description: Admin access required
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       404:
 *         description: Order not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.put('/status/:orderId',
  protect, isAdmin,
  validate([
    param('orderId').isMongoId().withMessage('Valid order ID required'),
    body('status').isIn(['pending','picked','in-transit','delivered']).withMessage('Invalid status')
  ]),
  deliveryController.updateStatus
);

/**
 * @swagger
 * /delivery/dashboard:
 *   get:
 *     summary: Get delivery dashboard (Admin only)
 *     tags: [Delivery]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Delivery dashboard data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 dashboard:
 *                   type: object
 *                   properties:
 *                     partners:
 *                       type: array
 *                     statistics:
 *                       type: object
 *                     recentOrders:
 *                       type: array
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       403:
 *         description: Admin access required
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get('/dashboard', protect, isAdmin, deliveryController.dashboard);

/**
 * @swagger
 * /delivery/initiate-shipment:
 *   post:
 *     summary: Create Delhivery shipment (Admin only)
 *     tags: [Delivery]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - waybill
 *               - order
 *               - consignee
 *               - pickup_location
 *               - weight
 *             properties:
 *               waybill:
 *                 type: string
 *                 description: Waybill number
 *               order:
 *                 type: string
 *                 description: Order ID
 *               consignee:
 *                 type: object
 *                 required:
 *                   - name
 *                   - phone
 *                   - address
 *                   - city
 *                   - state
 *                   - pincode
 *                 properties:
 *                   name:
 *                     type: string
 *                   phone:
 *                     type: string
 *                   address:
 *                     type: string
 *                   city:
 *                     type: string
 *                   state:
 *                     type: string
 *                   pincode:
 *                     type: string
 *               pickup_location:
 *                 type: string
 *                 description: Pickup location
 *               weight:
 *                 type: number
 *                 description: Package weight in kg
 *               cod:
 *                 type: boolean
 *                 description: Cash on delivery
 *                 default: false
 *     responses:
 *       200:
 *         description: Shipment initiated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *       400:
 *         description: Missing required fields
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       403:
 *         description: Admin access required
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Failed to initiate shipment
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.post('/initiate-shipment',
  protect, isAdmin,
  validate([
    body('waybill').notEmpty().withMessage('Waybill number is required'),
    body('order').isMongoId().withMessage('Valid order ID is required'),
    body('consignee.name').notEmpty().withMessage('Consignee name is required'),
    body('consignee.phone').notEmpty().withMessage('Consignee phone is required'),
    body('consignee.address').notEmpty().withMessage('Consignee address is required'),
    body('consignee.city').notEmpty().withMessage('Consignee city is required'),
    body('consignee.state').notEmpty().withMessage('Consignee state is required'),
    body('consignee.pincode').notEmpty().withMessage('Consignee pincode is required'),
    body('pickup_location').notEmpty().withMessage('Pickup location is required'),
    body('weight').isNumeric().withMessage('Weight must be a number'),
    body('cod').optional().isBoolean().withMessage('COD must be a boolean')
  ]),
  deliveryController.initiateShipment
);

/**
 * @swagger
 * /delivery/track-shipment/{waybill}:
 *   get:
 *     summary: Track Delhivery shipment
 *     tags: [Delivery]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: waybill
 *         required: true
 *         schema:
 *           type: string
 *         description: Waybill number
 *     responses:
 *       200:
 *         description: Shipment tracking data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 *       400:
 *         description: Waybill number required
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Failed to track shipment
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get('/track-shipment/:waybill',
  protect,
  validate([
    param('waybill').notEmpty().withMessage('Waybill number is required')
  ]),
  deliveryController.trackShipment
);

/**
 * @swagger
 * /delivery/cancel-shipment/{waybill}:
 *   post:
 *     summary: Cancel Delhivery shipment (Admin only)
 *     tags: [Delivery]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: waybill
 *         required: true
 *         schema:
 *           type: string
 *         description: Waybill number
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               reason:
 *                 type: string
 *                 description: Cancellation reason
 *                 default: Customer request
 *     responses:
 *       200:
 *         description: Shipment cancelled successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *       400:
 *         description: Waybill number required
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       403:
 *         description: Admin access required
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Failed to cancel shipment
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.post('/cancel-shipment/:waybill',
  protect, isAdmin,
  validate([
    param('waybill').notEmpty().withMessage('Waybill number is required'),
    body('reason').optional().isString().withMessage('Reason must be a string')
  ]),
  deliveryController.cancelShipment
);

module.exports = router; 