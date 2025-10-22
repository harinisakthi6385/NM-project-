const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./00-config/db');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
const productRoutes = require('./03-routes/productroutes.js');
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
