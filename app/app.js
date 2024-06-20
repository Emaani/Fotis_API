const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const commodityRoutes = require('./routes/commodities');

const app = express();

// Middleware for logging
app.use((req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`);
  next();
});

app.use(bodyParser.json());

// Routes
app.use('/commodities', commodityRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 5000;

sequelize.sync()
  .then(() => {
    app.listen(PORT, () => 
      console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.log('Error: ' + err));
