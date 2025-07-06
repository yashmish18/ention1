const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors({
  origin: 'http://localhost:3000', // your frontend URL
  credentials: true
}));

// Connect MongoDB
connectDB();

// Routes
app.use('/api/auth', require('./routes/authRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});