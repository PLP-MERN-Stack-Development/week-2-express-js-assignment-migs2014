const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const productSchema = new mongoose.Schema({
  id: { type: String, default: uuidv4 },
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  category: { type: String, required: true },
  inStock: Boolean
});

module.exports = mongoose.model('Product', productSchema);