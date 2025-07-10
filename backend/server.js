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

const apiRoutes = require('./routes');

const app = express();

// Middleware
app.use(corsConfig);
app.use(express.json());
app.use(helmet());
app.use(mongoSanitize());
app.use(morgan('combined'));
app.use(cookieParser());

// Routes
app.use('/api', apiRoutes);
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