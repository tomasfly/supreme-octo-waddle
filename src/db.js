const { Pool } = require('pg');

// Function to establish a connection to the PostgreSQL database
function connectToDB() {
  const pool = new Pool({
    user: '',
    host: '',
    database: '',
    password: '',
    port: 5432,
  });

  return pool;
}

module.exports = {
  connectToDB,
};