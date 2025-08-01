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
git clone https://github.com/Tejaswini29999/Quote-api
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

---

## 📬 Testing with Postman

You can use [Postman](https://www.postman.com/) to test the API manually.

### 🔹 Step-by-Step Instructions:

1. **Open Postman** and click `+` to open a new tab.
2. Set the method to `GET`.
3. Enter the URL:
4. Click **Send**.

---

### ✅ Expected Successful Response (HTTP 200 OK)

```json
{
  "quote": "Believe you can and you're halfway there. - Theodore Roosevelt"
}

##  Rate Limit Exceeded (HTTP 429)
If you send more than 5 requests in a minute fro

{
  "error": "Rate limit exceeded. Try again in X seconds."
}


