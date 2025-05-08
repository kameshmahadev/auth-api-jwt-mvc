const express = require("express");
const router = express.Router();
const { registerUser, loginUser, getUserInfo } = require("../controllers/authController");  // Make sure this import is correct
const authMiddleware = require("../middleware/authMiddleware");

// Public routes
router.post("/register", registerUser);
router.post("/login", loginUser);

// Protected route
router.get("/me", authMiddleware, getUserInfo);

module.exports = router;
