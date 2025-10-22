const Product = require('../01-models/Product');

// @desc Get all products
// @route GET /api/products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Create new product
// @route POST /api/products
exports.createProduct = async (req, res) => {
  const { name, price, description, category, stock } = req.body;
  try {
    const product = new Product({ name, price, description, category, stock });
    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
