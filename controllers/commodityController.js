const Commodity = require('../models/commodity');

// Get current prices
exports.getCurrentPrices = async (req, res) => {
  try {
    const commodities = await Commodity.findAll();
    res.json(commodities);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get trending prices
exports.getTrendingPrices = async (req, res) => {
  try {
    // Implement logic to determine trending prices
    const trendingCommodities = await Commodity.findAll({ where: { trend: 'upward' } });
    res.json(trendingCommodities);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get prices by region
exports.getPricesByRegion = async (req, res) => {
  const { region } = req.query;
  try {
    const commodities = await Commodity.findAll({ where: { region } });
    res.json(commodities);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Compare prices across regions
exports.comparePrices = async (req, res) => {
  const { regions } = req.query;
  const regionArray = regions.split(',');
  try {
    const commodities = await Commodity.findAll({
      where: {
        region: regionArray,
      },
    });
    res.json(commodities);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
