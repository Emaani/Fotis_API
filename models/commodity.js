const { Pool } = require('pg');
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'rootuser',
  port: 5432,
});



// Define the Commodity model
const Commodity = {};

Commodity.create = async (name, category, region, price, trend) => {
  const query = 'INSERT INTO commodities (name, category, region, price, trend) VALUES ($1, $2, $3, $4, $5) RETURNING *';
  const values = [name, category, region, price, trend];

  try {
    const { rows } = await pool.query(query, values);
    return rows[0];
  } catch (error) {
    throw new Error('Error creating commodity: ' + error.message);
  }
};

Commodity.findAll = async () => {
  const query = 'SELECT * FROM commodities';

  try {
    const { rows } = await pool.query(query);
    return rows;
  } catch (error) {
    throw new Error('Error fetching commodities: ' + error.message);
  }
};

module.exports = Commodity;
