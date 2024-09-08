const express = require('express');
const router = express.Router();
const { pool } = require('../config/database');

// Get all images
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM images');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Add more routes for creating, updating, and deleting images

module.exports = router;
