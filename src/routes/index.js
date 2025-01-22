const express = require("express");
const authController = require("../controllers/authController");
const customerController = require("../controllers/customerController");
const authenticate = require("../middleware/auth");

const router = express.Router();

// Auth Routes
router.post("/auth/register", authController.register);
router.post("/auth/login", authController.login);

// Customer Routes
router.post("/customers", authenticate, customerController.createCustomer);
router.get("/customers", authenticate, customerController.getCustomers);

module.exports = router;
