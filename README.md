# 🌟 RESTful Quote API with IP Rate Limiting

This is a simple RESTful API built using **Express.js** that returns a random inspirational quote. The API uses IP-based rate limiting to restrict excessive usage and prevent abuse.

---

## 🚀 Features

- ✅ Random quote generator
- ✅ IP-based rate limiting (5 requests per minute per IP)
- ✅ JSON API response
- ✅ Simple and lightweight (no DB needed)

---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **express-rate-limit**

---

## 📦 Setup Instructions

## File Structure

quote-api/
├── index.js         # Main Express app with quote endpoint and rate limiter
├── package.json     # Dependencies and metadata
└── README.md        # Project documentation


### 1. Clone the Repository

```bash
git clone [https://github.com/your-username/quote-api.git](https://github.com/Tejaswini29999/Quote-api/tree/main)
cd quote-api

## API Endpoint
## Success Response
{
  "quote": "The only way to do great work is to love what you do. - Steve Jobs"
}


## Rate Limiting

{
  "error": "Rate limit exceeded. Try again in X seconds."
}

