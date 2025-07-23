const express = require('express');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = 3000;

// Sample quotes
const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "The best revenge is massive success. - Frank Sinatra"
];

// Rate Limiting: 5 requests per minute per IP
const quoteLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 5, // limit each IP to 5 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
  message: (req, res) => {
    const retryAfter = Math.ceil((req.rateLimit.resetTime - new Date()) / 1000);
    return {
      error: `Rate limit exceeded. Try again in ${retryAfter} seconds.`
    };
  }
});

// Endpoint: GET /api/quote
app.get('/api/quote', quoteLimiter, (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  res.json({ quote: quotes[randomIndex] });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Quote API running on http://localhost:${PORT}/api/quote`);
});
