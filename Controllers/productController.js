const express = require('express');
const router = express.Router();

// Import the service that handles product logic
const productService = require('../Services/product.service');

// Route: Get all products
router.get('/', async (req, res) => {
    try {
        const products = await productService.getAllProducts();
        res.send(products);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// Route: Get a specific product based on ID
router.get('/:id', async (req, res) => {
    try {
        const product = await productService.getProductById(req.params.id);

        if (!product) {
            res.status(404).json('No product found with the given id: ' + req.params.id);
        } else {
            res.send(product);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// Route: Delete a product based on ID
router.delete('/:id', async (req, res) => {
    try {
        const affectedRows = await productService.deleteProduct(req.params.id);

        if (affectedRows === 0) {
            res.status(404).json('No product found with the given id: ' + req.params.id);
        } else {
            res.send('Product deleted successfully.');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// Route: Add a new product
router.post('/', async (req, res) => {
    try {
        await productService.addProduct(req.body);
        res.status(201).send('Product created successfully!');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// Route: Update a product based on ID
router.put('/:id', async (req, res) => {
    try {
        const affectedRows = await productService.updateProduct(req.body, req.params.id);

        if (affectedRows === 0) {
            res.status(404).json('No product found with the given id: ' + req.params.id);
        } else {
            res.send('Product updated successfully.');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
