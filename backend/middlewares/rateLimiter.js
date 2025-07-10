const rateLimit = require('express-rate-limit');

// General limiter: 100 requests per 15 minutes
const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Too many requests, please try again later.'
});

// Stricter limiter for sensitive routes: 10 requests per 10 minutes
const sensitiveLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 10,
  message: 'Too many attempts, please try again later.'
});

module.exports = {
  generalLimiter,
  sensitiveLimiter
}; 