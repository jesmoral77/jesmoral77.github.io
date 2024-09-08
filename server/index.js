const express = require('express');
const cors = require('cors');
const { pool } = require('./config/database');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/images', require('./routes/images'));
app.use('/api/posts', require('./routes/posts'));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
