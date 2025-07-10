const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');

let mongod;

// Connect to the in-memory database before running tests
beforeAll(async () => {
  mongod = await MongoMemoryServer.create();
  const uri = mongod.getUri();
  await mongoose.connect(uri);
});

// Clear all data between tests
afterEach(async () => {
  const collections = mongoose.connection.collections;
  for (const key in collections) {
    const collection = collections[key];
    await collection.deleteMany();
  }
});

// Disconnect and stop mongod after all tests
afterAll(async () => {
  await mongoose.connection.close();
  await mongod.stop();
});

// Global test utilities
global.testUtils = {
  // Helper to create a test user
  createTestUser: async (User, userData = {}) => {
    const defaultUser = {
      name: 'Test User',
      email: 'test@example.com',
      phone: '1234567890',
      password: 'password123',
      role: 'user',
      ...userData
    };
    
    const user = new User(defaultUser);
    await user.save();
    return user;
  },

  // Helper to create a test order
  createTestOrder: async (Order, orderData = {}) => {
    const defaultOrder = {
      user: orderData.user || new mongoose.Types.ObjectId(),
      products: [
        {
          name: 'Test Product',
          price: 100,
          quantity: 1
        }
      ],
      totalAmount: 100,
      status: 'Pending',
      ...orderData
    };
    
    const order = new Order(defaultOrder);
    await order.save();
    return order;
  },

  // Helper to generate JWT token
  generateToken: (user) => {
    const jwt = require('jsonwebtoken');
    return jwt.sign(
      { id: user._id, name: user.name, email: user.email },
      process.env.JWT_SECRET || 'test-secret',
      { expiresIn: '1h' }
    );
  }
}; 