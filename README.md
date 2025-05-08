# 🔐 User Authentication and Authorization API (Node.js + JWT + MongoDB)

A secure RESTful API for handling user registration, login, and protected user access using **Bearer tokens**. Built with **Node.js**, **Express.js**, **Mongoose**, and **JWT**, following the **MVC architecture**. This project includes Postman API documentation and is deployed on Render.

---

## 📁 Folder Structure

```
auth-api-jwt-mvc/
│
├── controllers/         # Logic for auth operations
├── models/              # Mongoose schema (User.js)
├── routes/              # API routes
├── middleware/          # JWT authentication middleware
├── postman_collection/  # Exported Postman docs
├── .env                 # Environment variables
├── server.js            # App entry point
└── README.md
```

---

## 🚀 Hosted App

- 🔗 **Live API**: [https://auth-api-jwt-mvc.onrender.com](https://auth-api-jwt-mvc.onrender.com)
- 🗂️ **GitHub Repo**: [https://github.com/kameshmahadev/auth-api-jwt-mvc.git](https://github.com/kameshmahadev/auth-api-jwt-mvc.git)

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT (jsonwebtoken)
- Postman (for API testing & docs)

---

## 📦 Environment Variables (`.env`)

```env
PORT=5000
MONGO_URI=mongodb+srv://Kamesh:Test1234%21@cluster0.xw7j6ay.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=mySuperSecretKey123
```

> **Note**: Keep sensitive values like Mongo URI and JWT secret secure in production.

---

## 📌 API Endpoints

### 🔸 `POST /api/auth/register`

Registers a new user.

**Request:**
```json
{
  "username": "Kamesh",
  "email": "Kamesh@example.com",
  "password": "123456"
}
```

**✅ Success Response:**
```json
{
  "message": "User registered successfully"
}
```

**❌ Failure Response (User exists):**
```json
{
  "message": "User already exists"
}
```

---

### 🔸 `POST /api/auth/login`

Logs in an existing user and returns a JWT.

**Request:**
```json
{
  "email": "Kamesh@example.com",
  "password": "12345"
}
```

**✅ Success Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**❌ Failure Response:**
```json
{
  "message": "Invalid credentials"
}
```

---

### 🔸 `GET /api/auth/me` (Protected)

Retrieves user info from the JWT token.

**Header:**
```
Authorization: Bearer <your_token_here>
```

**✅ Success Response:**
```json
{
  "user": {
    "id": "681b56d21d94a00f1555e039",
    "email": "test@example.com",
    "iat": 1746670385,
    "exp": 1746673985
  }
}
```

**❌ Failure Response:**
```json
{
  "message": "Token is not valid"
}
```

---

## 📑 Postman API Documentation

- Includes full test cases (success + failure)
- Located in: `postman_collection/jwt_auth_api.postman_collection.json`
- Import into Postman to test endpoints quickly

---

## 🔐 JWT Token Example

Sample token used in `GET /api/auth/me`:
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MWI1NmQyMWQ5NGEwMGYxNTU1ZTAzOSIsImVtYWlsIjoidGVzdEBleGFtcGxlLmNvbSIsImlhdCI6MTc0NjY3MDM4NSwiZXhwIjoxNzQ2NjczOTg1fQ.x5hoA6xOAwPCDKd7eF1P9mJUAbFeRheYDy0cUsryA2
```

---

## ✅ How to Run Locally

1. Clone the repo:
   ```bash
   git clone https://github.com/kameshmahadev/auth-api-jwt-mvc.git
   cd auth-api-jwt-mvc
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and fill in values (see above).
4. Start the server:
   ```bash
   node server.js
   ```

---

## ☁️ Deployment on Render

1. Push project to GitHub.
2. Go to [https://render.com](https://render.com).
3. Create New → Web Service → Connect your repo.
4. Add environment variables (`PORT`, `MONGO_URI`, `JWT_SECRET`).
5. Set:
   - Build command: `npm install`
   - Start command: `node server.js`
6. Deploy the service and get your live URL!

---

## 🧠 Author

👨‍💻 **Kamesh Mahadev**  
Beginner Full Stack Developer | Learning by building real-world APIs

---

## 📬 Submission Checklist

- ✅ GitHub Repo: [auth-api-jwt-mvc](https://github.com/kameshmahadev/auth-api-jwt-mvc.git)
- ✅ Live API on Render: [auth-api-jwt-mvc.onrender.com](https://auth-api-jwt-mvc.onrender.com)
- ✅ Postman Collection: Included inside project folder

---

> Built with ❤️ by Kamesh using Node.js, Express, MongoDB, and JWT
