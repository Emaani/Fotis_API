const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const commodityRoutes = require('./routes/commodities');

const app = express();

app.use(bodyParser.json());
app.use('/commodities', commodityRoutes);

const PORT = process.env.PORT || 5000;

sequelize.sync()
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.log('Error: ' + err));
