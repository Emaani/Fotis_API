const express = require('express');
const router = express.Router();
const commodityController = require('../controllers/commodityController');

router.get('/current', commodityController.getCurrentPrices);
router.get('/trending', commodityController.getTrendingPrices);
router.get('/regions', commodityController.getPricesByRegion);
router.get('/compare', commodityController.comparePrices);

module.exports = router;
