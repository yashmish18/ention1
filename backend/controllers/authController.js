const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User'); // Adjust the path as necessary
require('dotenv').config(); // Make sure this is at the top

// Function to create token
const createToken = (user) => {
  return jwt.sign(
    { id: user._id, name: user.name, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );
};

const signupUser = async (req, res) => {
  const { name, email, phone, password } = req.body;

  if (!name || !email || !phone || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({
    name,
    email,
    phone,
    password: hashedPassword
  });

  await user.save();

  const token = createToken(user);

  res.status(201).json({ message: 'User registered successfully', token });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  const token = createToken(user);

  res.status(200).json({ message: 'Login successful', token });
};

const googleRedirect = async (req, res) => {
  if (!req.user) {
    return res.redirect(`${process.env.FRONTEND_URL}/login?error=google_failed`);
  }

  const { id: googleId, displayName, emails, photos } = req.user;

  let user = await User.findOne({ googleId });
  if (!user) {
    // Check if user exists by email (fallback)
    user = await User.findOne({ email: emails[0].value });
    if (user) {
      user.googleId = googleId; // Link Google account to existing user
      await user.save();
    } else {
      user = await User.create({
        googleId,
        name: displayName,
        email: emails[0].value,
        photo: photos[0].value
      });
    }
  }

  const token = createToken(user);

  // Redirect with token in query string (or use cookies if you prefer)
  res.redirect(`${process.env.FRONTEND_URL}/dashboard?token=${token}`);
};

// Called from frontend to verify Google session
const loginSuccess = (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      user: req.user,
      message: 'User authenticated',
    });
  } else {
    res.status(401).json({ success: false, message: 'Not authenticated' });
  }
};

const logoutUser = (req, res) => {
  req.logout(() => {
    res.redirect(`${process.env.FRONTEND_URL}/login`);
  });
};

module.exports = {
  signupUser,
  loginUser,
  googleRedirect,
  loginSuccess,
  logoutUser
};
