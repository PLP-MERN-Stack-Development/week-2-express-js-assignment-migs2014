const mongoose = require('mongoose');
// const Product = require('./models/Product');
const Product = require('./models/Product');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();

mongoose.connect(process.env.mongouri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log("✅ Connected to MongoDB");

    const products = [
      { id: uuidv4(), name: "Laptop", description: "High-performance laptop with 16GB RAM", price: 1200, category: "electronics", inStock: true },
      { id: uuidv4(), name: "Smartphone", description: "Latest model with 128GB storage", price: 800, category: "electronics", inStock: true },
      { id: uuidv4(), name: "Coffee Maker", description: "Programmable coffee maker with timer", price: 50, category: "kitchen", inStock: false }
    ];

    await Product.insertMany(products);
    console.log("✅ Initial products added with UUIDs!");
    mongoose.connection.close();
  })
  .catch(err => console.error("❌ Error seeding data:", err));