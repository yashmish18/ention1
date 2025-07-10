const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User'); // Adjust the path as necessary
require('dotenv').config(); // Make sure this is at the top

// Function to create access token
const createAccessToken = (user) => {
  return jwt.sign(
    { id: user._id, name: user.name, email: user.email, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '15m' }
  );
};

// Function to create refresh token
const createRefreshToken = (user) => {
  return jwt.sign(
    { id: user._id },
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: '7d' }
  );
};

// Function to create token (for backward compatibility)
const createToken = (user) => {
  return jwt.sign(
    { id: user._id, name: user.name, email: user.email, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '24h' }
  );
};

exports.register = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    const token = createToken(user);
    res.status(201).json({ user, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const accessToken = createAccessToken(user);
    const refreshToken = createRefreshToken(user);

    // Set refresh token as httpOnly cookie
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    });

    // Secure admin redirect logic
    let redirectTo = undefined;
    if (email === 'business@ention.in' && await bcrypt.compare(password, user.password)) {
      redirectTo = '/admin';
    }

    res.status(200).json({ 
      message: 'Login successful', 
      accessToken,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      },
      redirectTo
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Refresh token endpoint
const refreshToken = async (req, res) => {
  const { refreshToken } = req.cookies;

  if (!refreshToken) {
    return res.status(401).json({ message: 'Refresh token not found' });
  }

  try {
    const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
    const user = await User.findById(decoded.id).select('-password');
    
    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    const accessToken = createAccessToken(user);
    
    res.status(200).json({ 
      accessToken,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    return res.status(401).json({ message: 'Invalid refresh token' });
  }
};

// Logout endpoint
const logout = async (req, res) => {
  res.clearCookie('refreshToken');
  res.status(200).json({ message: 'Logged out successfully' });
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
  register: exports.register,
  login: exports.login,
  refreshToken,
  logout,
  googleRedirect,
  loginSuccess,
  logoutUser
};
