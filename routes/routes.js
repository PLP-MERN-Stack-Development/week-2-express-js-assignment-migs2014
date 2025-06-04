const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// 🔐 Authentication Middleware
const authenticate = (req, res, next) => {
  if (!process.env.API_KEY) {
    return res.status(500).json({ error: "Server misconfiguration: API_KEY is missing." });
  }
  if (req.headers['api-key'] !== process.env.API_KEY) {
    return res.status(403).json({ error: "Unauthorized access" });
  }
  next();
};

router.use(authenticate); // Apply authentication middleware globally

// 📌 GET /api/products - Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Error fetching products" });
  }
});

// 📌 GET /api/products/:id - Get a specific product
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: "Error retrieving product" });
  }
});

// 📌 POST /api/products - Create a new product
router.post('/', async (req, res) => {
  try {
    const newProduct = new Product({ id: uuidv4(), ...req.body });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 📌 PUT /api/products/:id - Update a product
router.put('/:id', async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedProduct) return res.status(404).json({ error: "Product not found" });
    res.json(updatedProduct);
  } catch (err) {
    res.status(500).json({ error: "Error updating product" });
  }
});

// 📌 DELETE /api/products/:id - Delete a product
router.delete('/:id', async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Error deleting product" });
  }
});

module.exports = router;