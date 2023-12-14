// controllers/productController.js
const Product = require('../Models/Product');

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Create a new product
exports.createProduct = async (req, res) => {
  const { productName, price, description } = req.body;
  try {
    const newProduct = await Product.create({
      productName,
      price,
      description,
    });
    res.json(newProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
