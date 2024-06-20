const express = require('express');
const router = express.Router();

// Mock data
const commodities = [
  { id: 1, name: 'Corn', price: 100, region: 'East Africa' },
  { id: 2, name: 'Soybean', price: 200, region: 'West Africa' },
];

// Get all commodities
router.get('/', (req, res) => {
  res.json(commodities);
});

// Get a single commodity by ID
router.get('/:id', (req, res) => {
  const commodity = commodities.find(c => c.id === parseInt(req.params.id));
  if (!commodity) return res.status(404).send('Commodity not found');
  res.json(commodity);
});

// Add a new commodity
router.post('/', (req, res) => {
  const newCommodity = {
    id: commodities.length + 1,
    name: req.body.name,
    price: req.body.price,
    region: req.body.region,
  };
  commodities.push(newCommodity);
  res.status(201).json(newCommodity);
});

module.exports = router;
