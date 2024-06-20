const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('fotis_agro', 'username', 'password', {
  host: 'localhost',
  dialect: 'postgres',
});

sequelize.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err));

module.exports = sequelize;
