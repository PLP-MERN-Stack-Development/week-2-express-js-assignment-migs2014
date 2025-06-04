require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Validate Environment Variables
const requiredEnvVars = ['mongouri', 'PORT', 'API_KEY'];
requiredEnvVars.forEach(varName => {
  if (!process.env[varName]) {
    console.error(`❌ ERROR: Missing environment variable ${varName}`);
    process.exit(1);
  }
});

// Connect to MongoDB
mongoose.connect(process.env.mongouri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => {
    console.error("❌ MongoDB Connection Error:", err);
    process.exit(1);
  });

app.use(bodyParser.json());

// Import routes
const productRoutes = require('./routes/routes');
app.use('/api/products', productRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});