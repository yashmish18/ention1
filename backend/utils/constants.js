// Environment-based configuration
const config = {
  // Server
  PORT: process.env.PORT || 5000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  
  // Database
  MONGO_URI: process.env.MONGO_URI,
  
  // JWT
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET,
  JWT_EXPIRES_IN: '15m',
  JWT_REFRESH_EXPIRES_IN: '7d',
  
  // Email
  EMAIL_USER: process.env.EMAIL_USER,
  EMAIL_PASS: process.env.EMAIL_PASS,
  
  // Razorpay
  RAZORPAY_KEY_ID: process.env.RAZORPAY_KEY_ID,
  RAZORPAY_KEY_SECRET: process.env.RAZORPAY_KEY_SECRET,
  RAZORPAY_WEBHOOK_SECRET: process.env.RAZORPAY_WEBHOOK_SECRET,
  
  // Delhivery API
  DELHIVERY_API_URL: process.env.DELHIVERY_API_URL || 'https://track.delhivery.com',
  DELHIVERY_API_KEY: process.env.DELHIVERY_API_KEY,
  
  // Frontend
  FRONTEND_URL: process.env.FRONTEND_URL || 'http://localhost:3000',
  
  // CORS
  ALLOWED_ORIGINS: process.env.ALLOWED_ORIGINS 
    ? process.env.ALLOWED_ORIGINS.split(',')
    : ['http://localhost:3000', 'http://localhost:3001'],
  
  // Rate Limiting
  RATE_LIMIT_WINDOW_MS: 15 * 60 * 1000, // 15 minutes
  RATE_LIMIT_MAX: 100,
  SENSITIVE_RATE_LIMIT_WINDOW_MS: 10 * 60 * 1000, // 10 minutes
  SENSITIVE_RATE_LIMIT_MAX: 10,
  
  // Delivery Status
  DELIVERY_STATUSES: ['pending', 'picked', 'in-transit', 'delivered', 'cancelled'],
  
  // Order Status
  ORDER_STATUSES: ['Pending', 'Paid', 'Processing', 'Shipped', 'Delivered', 'Cancelled']
};

// Validation messages
const VALIDATION_MESSAGES = {
  REQUIRED: 'This field is required',
  EMAIL: 'Please enter a valid email address',
  PASSWORD_MIN: 'Password must be at least 6 characters long',
  PHONE: 'Please enter a valid phone number',
  AMOUNT: 'Please enter a valid amount',
  MONGO_ID: 'Please enter a valid ID',
  WAYBILL: 'Please enter a valid waybill number'
};

// API Response messages
const API_MESSAGES = {
  SUCCESS: {
    ORDER_CREATED: 'Order created successfully',
    PAYMENT_VERIFIED: 'Payment verified successfully',
    PARTNER_ADDED: 'Delivery partner added successfully',
    ORDER_ASSIGNED: 'Order assigned to delivery partner successfully',
    STATUS_UPDATED: 'Delivery status updated successfully',
    SHIPMENT_INITIATED: 'Shipment initiated successfully',
    SHIPMENT_TRACKED: 'Shipment tracking successful',
    SHIPMENT_CANCELLED: 'Shipment cancelled successfully',
    LOGIN_SUCCESS: 'Login successful',
    LOGOUT_SUCCESS: 'Logged out successfully',
    REGISTER_SUCCESS: 'User registered successfully'
  },
  ERROR: {
    ORDER_NOT_FOUND: 'Order not found',
    PARTNER_NOT_FOUND: 'Delivery partner not found',
    INVALID_PAYMENT: 'Invalid payment signature',
    INVALID_CREDENTIALS: 'Invalid credentials',
    USER_EXISTS: 'User already exists',
    PARTNER_EXISTS: 'Partner with this phone number already exists',
    ORDER_ALREADY_ASSIGNED: 'Order is already assigned to a delivery partner',
    ORDER_NOT_ASSIGNED: 'Order is not assigned to any delivery partner',
    SHIPMENT_FAILED: 'Failed to initiate shipment',
    TRACKING_FAILED: 'Failed to track shipment',
    CANCELLATION_FAILED: 'Failed to cancel shipment',
    WAYBILL_REQUIRED: 'Waybill number is required'
  }
};

module.exports = {
  config,
  VALIDATION_MESSAGES,
  API_MESSAGES
}; 