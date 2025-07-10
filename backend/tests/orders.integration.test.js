const request = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const app = require('../server');
const User = require('../models/User');
const Order = require('../models/Order');
const jwt = require('jsonwebtoken');

let mongoServer;

// Helper to create JWT
function generateToken(user) {
  return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET || 'testsecret', { expiresIn: '1h' });
}

describe('Order Routes Integration', () => {
  let adminUser, normalUser, adminToken, userToken, order1, order2;

  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri(), { useNewUrlParser: true, useUnifiedTopology: true });
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
  });

  beforeEach(async () => {
    await User.deleteMany({});
    await Order.deleteMany({});
    adminUser = await User.create({ name: 'Admin', email: 'admin@example.com', password: 'pass', role: 'admin' });
    normalUser = await User.create({ name: 'User', email: 'user@example.com', password: 'pass', role: 'user' });
    adminToken = generateToken(adminUser);
    userToken = generateToken(normalUser);
    order1 = await Order.create({ user: normalUser._id, products: [{ name: 'A', price: 10, quantity: 1 }], totalAmount: 10, status: 'Pending' });
    order2 = await Order.create({ user: adminUser._id, products: [{ name: 'B', price: 20, quantity: 2 }], totalAmount: 40, status: 'Processing' });
  });

  describe('GET /orders/all', () => {
    it('✅ returns all orders for admin', async () => {
      const res = await request(app)
        .get('/api/orders/all')
        .set('Authorization', `Bearer ${adminToken}`)
        .expect(200);
      expect(res.body.orders.length).toBe(2);
    });
    it('🚫 returns 401 if unauthenticated', async () => {
      await request(app)
        .get('/api/orders/all')
        .expect(401);
    });
    it('🚫 returns 403 if not admin', async () => {
      await request(app)
        .get('/api/orders/all')
        .set('Authorization', `Bearer ${userToken}`)
        .expect(403);
    });
  });

  describe('GET /orders/my-orders', () => {
    it('✅ returns only logged-in user orders', async () => {
      const res = await request(app)
        .get('/api/orders/my-orders')
        .set('Authorization', `Bearer ${userToken}`)
        .expect(200);
      expect(res.body.orders.length).toBe(1);
      expect(res.body.orders[0].user).toBe(normalUser._id.toString());
    });
    it('🚫 returns 401 if unauthenticated', async () => {
      await request(app)
        .get('/api/orders/my-orders')
        .expect(401);
    });
  });

  describe('PUT /orders/:id/status', () => {
    it('✅ updates order status for admin', async () => {
      const res = await request(app)
        .put(`/api/orders/${order1._id}/status`)
        .set('Authorization', `Bearer ${adminToken}`)
        .send({ status: 'Delivered' })
        .expect(200);
      expect(res.body.order.status).toBe('Delivered');
    });
    it('🚫 returns 401 if unauthenticated', async () => {
      await request(app)
        .put(`/api/orders/${order1._id}/status`)
        .send({ status: 'Delivered' })
        .expect(401);
    });
    it('🚫 returns 403 if not admin', async () => {
      await request(app)
        .put(`/api/orders/${order1._id}/status`)
        .set('Authorization', `Bearer ${userToken}`)
        .send({ status: 'Delivered' })
        .expect(403);
    });
    it('🚫 returns 404 for non-existent order', async () => {
      const fakeId = new mongoose.Types.ObjectId();
      await request(app)
        .put(`/api/orders/${fakeId}/status`)
        .set('Authorization', `Bearer ${adminToken}`)
        .send({ status: 'Delivered' })
        .expect(404);
    });
  });
}); 