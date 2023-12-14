// routes.js
const express = require('express');
const router = express.Router();
const productController = require('./Controllers/productController.js');
const userController = require('./Controllers/userController.js');

// Product Endpoints
router.get('/products', productController.getAllProducts);
router.post('/products', productController.createProduct);

// User Endpoints
router.get('/users', userController.getAllUsers);
router.post('/users', userController.createUser);

module.exports = router;
