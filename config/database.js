const { Client } = require('pg'); // Correct the import

const client = new Client({
  host: 'localhost',
  user: 'postgres', // Use correct user, assuming 'postgres' is right for PostgreSQL
  port: 5432,
  password: 'rootuser',
  database: 'postgres'
});

client.connect();

client.query('SELECT * FROM users', (err, res) => { // Fix syntax error
  if (!err) {
    console.log(res.rows);
  } else {
    console.log(err.message);
  }
  client.end(); // Fix the way client.end is called
});
