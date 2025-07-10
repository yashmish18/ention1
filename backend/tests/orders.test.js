const request = require('supertest');
const app = require('../server');
const User = require('../models/User');
const Order = require('../models/Order');
const orderController = require('../controllers/orderController');
const httpMocks = require('node-mocks-http');
jest.mock('../models/Order');

describe('Order Endpoints', () => {
  let testUser;
  let authToken;

  beforeEach(async () => {
    // Create a test user and get auth token
    testUser = await testUtils.createTestUser(User);
    authToken = testUtils.generateToken(testUser);
  });

  describe('POST /api/orders', () => {
    it('should create a new order successfully', async () => {
      const orderData = {
        products: [
          {
            name: 'Test Product 1',
            price: 100,
            quantity: 2
          },
          {
            name: 'Test Product 2',
            price: 50,
            quantity: 1
          }
        ],
        totalAmount: 250
      };

      const response = await request(app)
        .post('/api/orders')
        .set('Authorization', `Bearer ${authToken}`)
        .send(orderData)
        .expect(201);

      expect(response.body).toHaveProperty('_id');
      expect(response.body).toHaveProperty('user', testUser._id.toString());
      expect(response.body).toHaveProperty('products');
      expect(response.body).toHaveProperty('totalAmount', 250);
      expect(response.body).toHaveProperty('status', 'Pending');
      expect(response.body.products).toHaveLength(2);

      // Verify order was saved to database
      const savedOrder = await Order.findById(response.body._id);
      expect(savedOrder).toBeDefined();
      expect(savedOrder.user.toString()).toBe(testUser._id.toString());
    });

    it('should return 401 without authentication token', async () => {
      const orderData = {
        products: [{ name: 'Test Product', price: 100, quantity: 1 }],
        totalAmount: 100
      };

      const response = await request(app)
        .post('/api/orders')
        .send(orderData)
        .expect(401);

      expect(response.body).toHaveProperty('error');
    });

    it('should return 400 for missing products', async () => {
      const orderData = {
        totalAmount: 100
      };

      const response = await request(app)
        .post('/api/orders')
        .set('Authorization', `Bearer ${authToken}`)
        .send(orderData)
        .expect(400);

      expect(response.body).toHaveProperty('errors');
    });

    it('should return 400 for empty products array', async () => {
      const orderData = {
        products: [],
        totalAmount: 100
      };

      const response = await request(app)
        .post('/api/orders')
        .set('Authorization', `Bearer ${authToken}`)
        .send(orderData)
        .expect(400);

      expect(response.body).toHaveProperty('errors');
    });

    it('should return 400 for missing totalAmount', async () => {
      const orderData = {
        products: [{ name: 'Test Product', price: 100, quantity: 1 }]
      };

      const response = await request(app)
        .post('/api/orders')
        .set('Authorization', `Bearer ${authToken}`)
        .send(orderData)
        .expect(400);

      expect(response.body).toHaveProperty('errors');
    });

    it('should return 400 for non-numeric totalAmount', async () => {
      const orderData = {
        products: [{ name: 'Test Product', price: 100, quantity: 1 }],
        totalAmount: 'invalid'
      };

      const response = await request(app)
        .post('/api/orders')
        .set('Authorization', `Bearer ${authToken}`)
        .send(orderData)
        .expect(400);

      expect(response.body).toHaveProperty('errors');
    });
  });

  describe('GET /api/orders/myorders', () => {
    beforeEach(async () => {
      // Create some test orders for the user
      await testUtils.createTestOrder(Order, { user: testUser._id });
      await testUtils.createTestOrder(Order, { user: testUser._id });
      
      // Create an order for a different user
      const otherUser = await testUtils.createTestUser(User, { email: 'other@example.com' });
      await testUtils.createTestOrder(Order, { user: otherUser._id });
    });

    it('should return user\'s orders only', async () => {
      const response = await request(app)
        .get('/api/orders/myorders')
        .set('Authorization', `Bearer ${authToken}`)
        .expect(200);

      expect(response.body).toHaveProperty('orders');
      expect(Array.isArray(response.body.orders)).toBe(true);
      expect(response.body.orders).toHaveLength(2);

      // Verify all orders belong to the authenticated user
      response.body.orders.forEach(order => {
        expect(order.user).toBe(testUser._id.toString());
      });
    });

    it('should return 401 without authentication token', async () => {
      const response = await request(app)
        .get('/api/orders/myorders')
        .expect(401);

      expect(response.body).toHaveProperty('error');
    });
  });

  describe('GET /api/orders (Admin)', () => {
    let adminUser;
    let adminToken;

    beforeEach(async () => {
      // Create an admin user
      adminUser = await testUtils.createTestUser(User, {
        email: 'admin@example.com',
        role: 'admin'
      });
      adminToken = testUtils.generateToken(adminUser);

      // Create some test orders
      await testUtils.createTestOrder(Order, { user: testUser._id });
      await testUtils.createTestOrder(Order, { user: adminUser._id });
    });

    it('should return all orders for admin', async () => {
      const response = await request(app)
        .get('/api/orders')
        .set('Authorization', `Bearer ${adminToken}`)
        .expect(200);

      expect(response.body).toHaveProperty('orders');
      expect(Array.isArray(response.body.orders)).toBe(true);
      expect(response.body.orders.length).toBeGreaterThanOrEqual(2);
    });

    it('should return 403 for non-admin user', async () => {
      const response = await request(app)
        .get('/api/orders')
        .set('Authorization', `Bearer ${authToken}`)
        .expect(403);

      expect(response.body).toHaveProperty('error', 'Admin access denied');
    });

    it('should return 401 without authentication token', async () => {
      const response = await request(app)
        .get('/api/orders')
        .expect(401);

      expect(response.body).toHaveProperty('error');
    });
  });

  describe('DELETE /api/orders/:id/cancel', () => {
    let testOrder;

    beforeEach(async () => {
      // Create a test order
      testOrder = await testUtils.createTestOrder(Order, {
        user: testUser._id,
        status: 'Pending'
      });
    });

    it('should cancel order successfully', async () => {
      const response = await request(app)
        .delete(`/api/orders/${testOrder._id}/cancel`)
        .set('Authorization', `Bearer ${authToken}`)
        .expect(200);

      expect(response.body).toHaveProperty('message');
      expect(response.body).toHaveProperty('order');
      expect(response.body.order.status).toBe('Cancelled');

      // Verify order was updated in database
      const updatedOrder = await Order.findById(testOrder._id);
      expect(updatedOrder.status).toBe('Cancelled');
    });

    it('should return 404 for non-existent order', async () => {
      const fakeOrderId = '507f1f77bcf86cd799439011';
      
      const response = await request(app)
        .delete(`/api/orders/${fakeOrderId}/cancel`)
        .set('Authorization', `Bearer ${authToken}`)
        .expect(404);

      expect(response.body).toHaveProperty('error', 'Order not found');
    });

    it('should return 400 for invalid order ID format', async () => {
      const response = await request(app)
        .delete('/api/orders/invalid-id/cancel')
        .set('Authorization', `Bearer ${authToken}`)
        .expect(400);

      expect(response.body).toHaveProperty('errors');
    });

    it('should return 401 without authentication token', async () => {
      const response = await request(app)
        .delete(`/api/orders/${testOrder._id}/cancel`)
        .expect(401);

      expect(response.body).toHaveProperty('error');
    });

    it('should return 400 for non-pending orders', async () => {
      // Update order to a non-pending status
      testOrder.status = 'Paid';
      await testOrder.save();

      const response = await request(app)
        .delete(`/api/orders/${testOrder._id}/cancel`)
        .set('Authorization', `Bearer ${authToken}`)
        .expect(400);

      expect(response.body).toHaveProperty('error', 'Only pending orders can be cancelled');
    });
  });

  describe('PUT /api/orders/:id (Admin)', () => {
    let adminUser;
    let adminToken;
    let testOrder;

    beforeEach(async () => {
      // Create an admin user
      adminUser = await testUtils.createTestUser(User, {
        email: 'admin@example.com',
        role: 'admin'
      });
      adminToken = testUtils.generateToken(adminUser);

      // Create a test order
      testOrder = await testUtils.createTestOrder(Order, {
        user: testUser._id
      });
    });

    it('should update order status successfully', async () => {
      const updateData = {
        status: 'Processing'
      };

      const response = await request(app)
        .put(`/api/orders/${testOrder._id}`)
        .set('Authorization', `Bearer ${adminToken}`)
        .send(updateData)
        .expect(200);

      expect(response.body).toHaveProperty('status', 'Processing');

      // Verify order was updated in database
      const updatedOrder = await Order.findById(testOrder._id);
      expect(updatedOrder.status).toBe('Processing');
    });

    it('should return 403 for non-admin user', async () => {
      const updateData = {
        status: 'Processing'
      };

      const response = await request(app)
        .put(`/api/orders/${testOrder._id}`)
        .set('Authorization', `Bearer ${authToken}`)
        .send(updateData)
        .expect(403);

      expect(response.body).toHaveProperty('error', 'Admin access denied');
    });

    it('should return 404 for non-existent order', async () => {
      const fakeOrderId = '507f1f77bcf86cd799439011';
      const updateData = {
        status: 'Processing'
      };

      const response = await request(app)
        .put(`/api/orders/${fakeOrderId}`)
        .set('Authorization', `Bearer ${adminToken}`)
        .send(updateData)
        .expect(404);

      expect(response.body).toHaveProperty('error', 'Order not found');
    });
  });
}); 

describe('Order Controller Unit Tests', () => {
  let req, res;

  beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('getAllOrders', () => {
    it('should return all orders (success)', async () => {
      const mockOrders = [{ _id: '1' }, { _id: '2' }];
      Order.find.mockReturnValue({ populate: () => ({ sort: () => Promise.resolve(mockOrders) }) });
      await orderController.getAllOrders(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ success: true, orders: mockOrders });
    });
    it('should handle server error', async () => {
      Order.find.mockImplementation(() => { throw new Error('DB error'); });
      await orderController.getAllOrders(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ error: 'DB error' }));
    });
  });

  describe('getUserOrders', () => {
    it('should return user orders (success)', async () => {
      const mockOrders = [{ _id: '1', user: 'u1' }];
      req.user = { id: 'u1' };
      Order.find.mockReturnValue({ sort: () => Promise.resolve(mockOrders) });
      await orderController.getUserOrders(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ success: true, orders: mockOrders });
    });
    it('should handle server error', async () => {
      req.user = { id: 'u1' };
      Order.find.mockImplementation(() => { throw new Error('DB error'); });
      await orderController.getUserOrders(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ error: 'DB error' }));
    });
  });

  describe('updateOrderStatus', () => {
    it('should update order status (success)', async () => {
      req.params = { id: 'order1' };
      req.body = { status: 'Shipped' };
      const mockOrder = { status: 'Pending', save: jest.fn().mockResolvedValue(true) };
      Order.findById.mockResolvedValue(mockOrder);
      await orderController.updateOrderStatus(req, res);
      expect(mockOrder.status).toBe('Shipped');
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ success: true, order: mockOrder });
    });
    it('should return 404 if order not found', async () => {
      req.params = { id: 'order1' };
      req.body = { status: 'Shipped' };
      Order.findById.mockResolvedValue(null);
      await orderController.updateOrderStatus(req, res);
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ error: 'Order not found' });
    });
    it('should handle server error', async () => {
      req.params = { id: 'order1' };
      req.body = { status: 'Shipped' };
      Order.findById.mockRejectedValue(new Error('DB error'));
      await orderController.updateOrderStatus(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ error: 'DB error' }));
    });
  });
}); 