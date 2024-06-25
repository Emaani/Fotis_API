const express = require('express');
const router = express.Router();
const Commodity = require('../models/commodity');
const commodityController = require('../controllers/commodityController');

// POST /commodities
router.post('/', async (req, res) => {
    const { name, category, region, price, trend } = req.body;
  
    try {
      const newCommodity = await Commodity.create(name, category, region, price, trend);
      res.status(201).json(newCommodity);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // GET /commodities
  router.get('/', async (req, res) => {
    try {
      const commodities = await Commodity.findAll();
      res.json(commodities);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  module.exports = router;
  
  
  
  
  
  
