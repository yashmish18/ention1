// backend/controllers/deliveryController.js
const DeliveryPartner = require('../models/DeliveryPartner');
const Order = require('../models/Order');
const delhiveryService = require('../services/delhiveryService');
const winston = require('winston');

// Add delivery partner (admin only)
exports.addPartner = async (req, res) => {
  try {
    const { name, phone } = req.body;

    // Check if partner already exists with same phone
    const existingPartner = await DeliveryPartner.findOne({ phone });
    if (existingPartner) {
      return res.status(400).json({ error: 'Partner with this phone number already exists' });
    }

    const newPartner = new DeliveryPartner({
      name,
      phone,
      assignedOrders: []
    });

    await newPartner.save();

    res.status(201).json({
      success: true,
      message: 'Delivery partner added successfully',
      partner: newPartner
    });
  } catch (error) {
    console.error('Add partner error:', error);
    res.status(500).json({ error: 'Failed to add delivery partner' });
  }
};

// List partners (admin only)
exports.listPartners = async (req, res) => {
  try {
    const partners = await DeliveryPartner.find()
      .populate('assignedOrders', 'orderId status totalAmount createdAt')
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      partners: partners
    });
  } catch (error) {
    console.error('List partners error:', error);
    res.status(500).json({ error: 'Failed to fetch delivery partners' });
  }
};

// Assign partner to order
exports.assignOrder = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { partnerId } = req.body;

    // Check if order exists
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    // Check if partner exists
    const partner = await DeliveryPartner.findById(partnerId);
    if (!partner) {
      return res.status(404).json({ error: 'Delivery partner not found' });
    }

    // Check if order is already assigned
    if (order.deliveryPartner) {
      return res.status(400).json({ error: 'Order is already assigned to a delivery partner' });
    }

    // Update order with delivery partner and status
    order.deliveryPartner = partnerId;
    order.deliveryStatus = 'pending';
    await order.save();

    // Add order to partner's assigned orders
    partner.assignedOrders.push(orderId);
    await partner.save();

    res.status(200).json({
      success: true,
      message: 'Order assigned to delivery partner successfully',
      order: order,
      partner: partner
    });
  } catch (error) {
    console.error('Assign order error:', error);
    res.status(500).json({ error: 'Failed to assign order to delivery partner' });
  }
};

// Update order status
exports.updateStatus = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    // Check if order exists
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    // Check if order has a delivery partner
    if (!order.deliveryPartner) {
      return res.status(400).json({ error: 'Order is not assigned to any delivery partner' });
    }

    // Update order status
    order.deliveryStatus = status;
    await order.save();

    res.status(200).json({
      success: true,
      message: 'Delivery status updated successfully',
      order: order
    });
  } catch (error) {
    console.error('Update status error:', error);
    res.status(500).json({ error: 'Failed to update delivery status' });
  }
};

// Admin dashboard
exports.dashboard = async (req, res) => {
  try {
    // Get all delivery partners with their assigned orders
    const partners = await DeliveryPartner.find()
      .populate({
        path: 'assignedOrders',
        select: 'orderId status totalAmount createdAt deliveryStatus',
        model: 'Order'
      });

    // Get delivery statistics
    const totalOrders = await Order.countDocuments({ deliveryPartner: { $exists: true } });
    const pendingOrders = await Order.countDocuments({ deliveryStatus: 'pending' });
    const inTransitOrders = await Order.countDocuments({ deliveryStatus: 'in-transit' });
    const deliveredOrders = await Order.countDocuments({ deliveryStatus: 'delivered' });

    // Get recent orders with delivery info
    const recentOrders = await Order.find({ deliveryPartner: { $exists: true } })
      .populate('deliveryPartner', 'name phone')
      .sort({ createdAt: -1 })
      .limit(10);

    res.status(200).json({
      success: true,
      dashboard: {
        partners: partners,
        statistics: {
          totalOrders,
          pendingOrders,
          inTransitOrders,
          deliveredOrders
        },
        recentOrders: recentOrders
      }
    });
  } catch (error) {
    console.error('Dashboard error:', error);
    res.status(500).json({ error: 'Failed to fetch dashboard data' });
  }
};

// Initiate Delhivery shipment
exports.initiateShipment = async (req, res) => {
  try {
    const shipmentData = req.body;

    winston.info('Initiating Delhivery shipment', {
      orderId: shipmentData.order,
      consignee: shipmentData.consignee?.name,
      pickupLocation: shipmentData.pickup_location
    });

    // Validate required fields
    if (!shipmentData.waybill || !shipmentData.order || !shipmentData.consignee) {
      return res.status(400).json({
        error: 'Missing required fields: waybill, order, and consignee information are required'
      });
    }

    // Call Delhivery service to create shipment
    const response = await delhiveryService.createShipment(shipmentData);

    // Update order with shipment details if order exists
    if (shipmentData.order) {
      try {
        const order = await Order.findById(shipmentData.order);
        if (order) {
          order.deliveryStatus = 'picked';
          order.waybill = shipmentData.waybill;
          order.shipmentDetails = response;
          await order.save();

          winston.info('Order updated with shipment details', {
            orderId: order._id,
            waybill: shipmentData.waybill
          });
        }
      } catch (orderError) {
        winston.warn('Failed to update order with shipment details', {
          orderId: shipmentData.order,
          error: orderError.message
        });
      }
    }

    res.status(200).json({
      success: true,
      message: 'Shipment initiated successfully',
      data: response
    });

  } catch (error) {
    winston.error('Shipment initiation failed', {
      error: error.message,
      shipmentData: {
        order: req.body.order,
        waybill: req.body.waybill
      }
    });

    res.status(500).json({
      error: 'Failed to initiate shipment',
      details: error.message
    });
  }
};

// Track Delhivery shipment
exports.trackShipment = async (req, res) => {
  try {
    const { waybill } = req.params;

    if (!waybill) {
      return res.status(400).json({ error: 'Waybill number is required' });
    }

    winston.info('Tracking Delhivery shipment', { waybill });

    const trackingData = await delhiveryService.trackShipment(waybill);

    res.status(200).json({
      success: true,
      data: trackingData
    });

  } catch (error) {
    winston.error('Shipment tracking failed', {
      error: error.message,
      waybill: req.params.waybill
    });

    res.status(500).json({
      error: 'Failed to track shipment',
      details: error.message
    });
  }
};

// Cancel Delhivery shipment
exports.cancelShipment = async (req, res) => {
  try {
    const { waybill } = req.params;
    const { reason } = req.body;

    if (!waybill) {
      return res.status(400).json({ error: 'Waybill number is required' });
    }

    winston.info('Cancelling Delhivery shipment', { waybill, reason });

    const response = await delhiveryService.cancelShipment(waybill, reason);

    // Update order status if order exists with this waybill
    try {
      const order = await Order.findOne({ waybill });
      if (order) {
        order.deliveryStatus = 'cancelled';
        await order.save();

        winston.info('Order updated after shipment cancellation', {
          orderId: order._id,
          waybill
        });
      }
    } catch (orderError) {
      winston.warn('Failed to update order after shipment cancellation', {
        waybill,
        error: orderError.message
      });
    }

    res.status(200).json({
      success: true,
      message: 'Shipment cancelled successfully',
      data: response
    });

  } catch (error) {
    winston.error('Shipment cancellation failed', {
      error: error.message,
      waybill: req.params.waybill
    });

    res.status(500).json({
      error: 'Failed to cancel shipment',
      details: error.message
    });
  }
}; 