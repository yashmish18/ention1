# EnTion E-commerce Backend

A production-ready Node.js + Express + MongoDB e-commerce backend with JWT authentication, Razorpay payment integration, Delhivery courier API, and comprehensive testing.

## 🚀 Features

- **Authentication & Authorization**
  - JWT-based authentication with refresh tokens
  - Role-based access control (User/Admin)
  - Password hashing with bcrypt
  - Rate limiting and security middleware

- **E-commerce Core**
  - Product management
  - Order processing with status tracking
  - Shopping cart functionality
  - Invoice generation with PDFKit

- **Payment Integration**
  - Razorpay payment gateway
  - Payment verification and webhooks
  - Order status updates

- **Delivery Management**
  - Delhivery courier API integration
  - Shipment tracking and cancellation
  - Delivery partner management
  - Admin dashboard

- **Security & Performance**
  - Helmet security headers
  - MongoDB injection protection
  - Input validation with express-validator
  - Request logging with Morgan
  - Error handling middleware

- **Testing & Documentation**
  - Jest + Supertest unit tests
  - MongoDB memory server for isolated testing
  - Swagger API documentation
  - Postman collection with automated tests

## 📋 Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- npm or yarn

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   # Server Configuration
   PORT=5000
   NODE_ENV=development

   # Database
   MONGODB_URI=mongodb://localhost:27017/ention-ecommerce
   
   # JWT Secrets
   JWT_SECRET=your-super-secret-jwt-key
   JWT_REFRESH_SECRET=your-super-secret-refresh-key
   JWT_EXPIRE=1h
   JWT_REFRESH_EXPIRE=7d

   # Email Configuration (Gmail)
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password

   # Razorpay Configuration
   RAZORPAY_KEY_ID=your-razorpay-key-id
   RAZORPAY_KEY_SECRET=your-razorpay-secret

   # Delhivery Configuration
   DELHIVERY_API_KEY=your-delhivery-api-key
   DELHIVERY_BASE_URL=https://track.delhivery.com/api/v1
   DELHIVERY_PINCODE=400001

   # Rate Limiting
   RATE_LIMIT_WINDOW_MS=900000
   RATE_LIMIT_MAX_REQUESTS=100
   ```

4. **Start the server**
   ```bash
   # Development mode
   npm run dev

   # Production mode
   npm start
   ```

## 🧪 Testing

### Unit Tests
```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### API Tests (Postman)
```bash
# Install Newman globally
npm install -g newman

# Run API tests
npm run test:api
```

### Test Coverage
Tests cover:
- Authentication endpoints (login, register, refresh token)
- Order management (create, read, update, cancel)
- Input validation and error handling
- Admin access control
- Database operations

## 📚 API Documentation

### Swagger UI
Access the interactive API documentation at:
```
http://localhost:5000/api-docs
```

### Key Endpoints

#### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `POST /api/auth/refresh-token` - Refresh access token
- `POST /api/auth/logout` - User logout

#### Orders
- `POST /api/orders` - Create new order
- `GET /api/orders/myorders` - Get user's orders
- `GET /api/orders` - Get all orders (Admin)
- `PUT /api/orders/:id` - Update order status (Admin)
- `DELETE /api/orders/:id/cancel` - Cancel order

#### Delivery
- `POST /api/delivery` - Add delivery partner (Admin)
- `GET /api/delivery` - List delivery partners (Admin)
- `PUT /api/delivery/assign/:orderId` - Assign order to partner (Admin)
- `PUT /api/delivery/status/:orderId` - Update delivery status (Admin)
- `POST /api/delivery/initiate-shipment` - Create Delhivery shipment (Admin)
- `GET /api/delivery/track-shipment/:waybill` - Track shipment
- `POST /api/delivery/cancel-shipment/:waybill` - Cancel shipment (Admin)

#### Products
- `GET /api/products` - Get all products
- `POST /api/products` - Add product (Admin)
- `PUT /api/products/:id` - Update product (Admin)
- `DELETE /api/products/:id` - Delete product (Admin)

## 🔧 Project Structure

```
backend/
├── config/                 # Configuration files
│   ├── db.js              # Database connection
│   └── passport.js        # Passport configuration
├── controllers/           # Route controllers
│   ├── authController.js  # Authentication logic
│   ├── orderController.js # Order management
│   ├── productController.js # Product management
│   └── deliveryController.js # Delivery management
├── middlewares/           # Custom middlewares
│   ├── authMiddleware.js  # JWT authentication
│   └── validateInput.js   # Input validation
├── models/               # MongoDB models
│   ├── User.js           # User schema
│   ├── Order.js          # Order schema
│   ├── Product.js        # Product schema
│   └── DeliveryPartner.js # Delivery partner schema
├── routes/               # API routes
│   ├── authRoutes.js     # Authentication routes
│   ├── orderRoutes.js    # Order routes
│   ├── productRoutes.js  # Product routes
│   └── deliveryRoutes.js # Delivery routes
├── services/             # Business logic services
│   └── delhiveryService.js # Delhivery API service
├── utils/                # Utility functions
│   ├── invoiceGenerator.js # PDF invoice generation
│   ├── mailer.js         # Email service
│   └── razorpay.js       # Razorpay integration
├── tests/                # Test files
│   ├── setup.js          # Test setup
│   ├── auth.test.js      # Authentication tests
│   └── orders.test.js    # Order tests
├── swagger.js            # Swagger configuration
├── server.js             # Main server file
├── package.json          # Dependencies and scripts
├── jest.config.js        # Jest configuration
├── postman_collection.json # Postman collection
└── README.md             # This file
```

## 🔐 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: bcrypt for password security
- **Rate Limiting**: Prevent brute force attacks
- **Input Validation**: Sanitize and validate all inputs
- **Security Headers**: Helmet for security headers
- **MongoDB Sanitization**: Prevent NoSQL injection
- **CORS Configuration**: Cross-origin resource sharing
- **Error Handling**: Centralized error management

## 🚀 Deployment

### Environment Variables
Ensure all required environment variables are set in production:
- Database connection string
- JWT secrets
- API keys (Razorpay, Delhivery)
- Email configuration
- Rate limiting settings

### Production Checklist
- [ ] Set `NODE_ENV=production`
- [ ] Configure MongoDB Atlas or production database
- [ ] Set up SSL/TLS certificates
- [ ] Configure reverse proxy (Nginx)
- [ ] Set up monitoring and logging
- [ ] Configure backup strategies
- [ ] Set up CI/CD pipeline

### Docker Deployment
```dockerfile
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 5000
CMD ["npm", "start"]
```

## 📊 Monitoring & Logging

- **Morgan**: HTTP request logging
- **Winston**: Application logging
- **Error Tracking**: Centralized error handling
- **Performance Monitoring**: Response time tracking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the API documentation at `/api-docs`

## 🔄 Version History

- **v1.0.0**: Initial release with core e-commerce features
- **v1.1.0**: Added Razorpay payment integration
- **v1.2.0**: Added Delhivery delivery integration
- **v1.3.0**: Added comprehensive testing and documentation 