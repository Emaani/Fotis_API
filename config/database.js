const { Client } = require('pg'); // Correct the import

const client = new Client({
  host: '192.168.100.137',
  user: 'postgres', // Use correct user, assuming 'postgres' is right for PostgreSQL
  port: 5432,
  password: '',
  database: 'fotisdb'
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
