// server.js (with orders and auth)
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const morgan = require('morgan');
const winston = require('winston');
const { generalLimiter, sensitiveLimiter } = require('./middlewares/rateLimiter');
const errorHandler = require('./middlewares/errorMiddleware');
const corsConfig = require('./config/cors');
const cookieParser = require('cookie-parser');

// Import all routes
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const contactRoutes = require('./routes/contact');
const cardsRoutes = require('./routes/cards');
const associateRoutes = require('./routes/associate');

const app = express();

// Middleware
app.use(corsConfig);
app.use(express.json());
app.use(helmet());
app.use(mongoSanitize());
app.use(morgan('combined'));
app.use(cookieParser());

// Apply rate limiting
app.use('/api/', generalLimiter);
app.use('/api/auth/', sensitiveLimiter);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/cards', cardsRoutes);
app.use('/api/associate', associateRoutes);

// Error handling middleware
app.use(errorHandler);

// Connect to DB and start server
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
.catch(err => console.error(err));
