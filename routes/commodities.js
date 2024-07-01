const express = require('express');
const router = express.Router();
const Commodity = require('../models/commodity'); // Assuming you have a Sequelize model named Commodity

// Get all commodities
router.get('/', async (req, res) => {
  try {
    const commodities = await Commodity.findAll();
    res.json(commodities);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching commodities: ' + err });
  }
});

// Get a single commodity by ID
router.get('/:id', async (req, res) => {
  try {
    const commodity = await Commodity.findByPk(req.params.id);
    if (commodity) {
      res.json(commodity);
    } else {
      res.status(404).json({ error: 'Commodity not found' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Error fetching commodity: ' + err });
  }
});

// Add a new commodity
router.post('/', async (req, res) => {
  try {
    const newCommodity = await Commodity.create(req.body);
    res.status(201).json(newCommodity);
  } catch (err) {
    res.status(500).json({ error: 'Error creating commodity: ' + err });
  }
});

module.exports = router;
